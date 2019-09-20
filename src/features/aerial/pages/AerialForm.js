import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import QueryString from 'query-string'
import React, { useEffect, useRef, useState } from 'react'

import { colors } from '@helpers/colors'
import { i18n } from '@i18n'
import { services } from '@/constants/services'
import { withRouter } from 'react-router-dom'
import { replaceEnterWithSpace } from '@utils/string'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import Panel from '@components/panel/Panel'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'

import AerialServiceModel from '../models/AerialServiceModel'
import AerialClientForm from '../components/aerialClientForm/AerialClientForm'
import Tabs from '../components/tabs/Tabs'

import { aerialFormFields } from '../fields'

const AerialList = props => {
    const { aerial, match, requestSearchCityOurApiAction, suggestions, travelScript } = props
    const {
        params: { id, idAerial }
    } = match
    const { dateId, scriptDate, scriptId } = QueryString.parse(location.search)

    const previousPath = `/travel/${id}/script`
    const form = useRef()

    const [activeTab, updateActiveTab] = useState(0)
    const [serviceDisabled, updateServiceDisabled] = useState(false)
    const [image, updateImage] = useState()
    const [parts, updateParts] = useState([aerialFormFields(0)])

    useEffect(() => {
        const { requestGetSingleAction } = props
        if (idAerial) {
            requestGetSingleAction({ id: idAerial })
            updateServiceDisabled(true)
        } else {
            requestGetSingleAction({ id: null })
            updateServiceDisabled(false)
        }
    }, [idAerial])

    useEffect(() => {
        if (aerial && aerial.id === idAerial) {
            updateParts([...aerial.toForm().journeys.map((_, index) => aerialFormFields(index))])
        } else {
            updateParts([aerialFormFields(0)])
        }
    }, [aerial])

    const removePartsLastItem = () => {
        const newParts = [...parts]
        newParts.pop()
        updateParts(newParts)
    }

    const callSaveData = values => {
        values.journeys.map(journey => (journey.flightNumber = replaceEnterWithSpace(journey.flightNumber)))
        const { requestSaveDataAction } = props
        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new AerialServiceModel({ ...values, scriptDate }, true).toDTO(),
                type: services.AERIAL
            },
            image,
            redirectTo: previousPath
        })
        reset()
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        updateParts([aerialFormFields(0)])
        updateImage(null)
    }
    return (
        <>
            <Panel
                backgroundImageUrl={aerial && aerial.getImage()}
                icon="plane-alt"
                id={aerial && aerial.id}
                uploadImage={updateImage}
            >
                <Tabs
                    activeTab={activeTab}
                    parts={parts}
                    removePartsLastItem={removePartsLastItem}
                    updateActiveTab={updateActiveTab}
                    updateParts={updateParts}
                />
            </Panel>
            <FormBuilder
                clients={props.clients}
                disabled={serviceDisabled}
                fieldChildren={<AerialClientForm clients={props.clients} disabled={serviceDisabled} form={form} />}
                fields={parts[activeTab]}
                fieldsToValidate={parts}
                getSuggestions={requestSearchCityOurApiAction}
                initialValues={(aerial && aerial.toForm()) || { values: [{ dateExit: scriptDate }] }}
                onSubmit={callSaveData}
                rangeDates={travelScript && travelScript.getRangeDates()}
                ref={process.env.__TEST__ ? null : form}
                suggestions={suggestions}
            />
            <FormButtonContainer>
                <Button
                    color={colors.purple}
                    onClick={() => (serviceDisabled ? updateServiceDisabled(false) : onSaveClick())}
                    text={i18n.t(serviceDisabled ? 'buttons.editService' : 'buttons.saveService')}
                />
                <Cancel link={previousPath} />
            </FormButtonContainer>
        </>
    )
}

AerialList.defaultProps = {
    aerial: {},
    clients: []
}

AerialList.propTypes = {
    aerial: PropTypes.objectOf(AerialServiceModel),
    clients: PropTypes.array,
    requestDelAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchCityOurApiAction: PropTypes.func.isRequired,
    suggestions: PropTypes.array
}

export default withRouter(AerialList)
