import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'

import { colors } from '@helpers/colors'
import { getQueryParams } from '@utils/browser'
import { i18n } from '@i18n'
import { services } from '@/constants/services'
import { withRouter } from 'react-router-dom'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import Panel from '@components/panel/Panel'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import WrapperPadding from '@components/wrapper/WrapperPadding'

import { cruiseFormFields } from '../fields'

import CruiseServiceModel from '../models/CruiseServiceModel'

const CruiseForm = props => {
    const { cruise, match, travelScript } = props
    const {
        params: { cruiseId, id }
    } = match
    const { dateId, scriptDate, scriptId } = getQueryParams()

    const form = useRef()
    const previousPath = `/travel/${id}/script`

    const [image, updateImage] = useState()
    const [serviceDisabled, updateServiceDisabled] = useState(false)

    useEffect(() => {
        const { requestGetSingleAction } = props
        if (cruiseId) {
            requestGetSingleAction({ id: cruiseId })
            updateServiceDisabled(true)
        } else {
            requestGetSingleAction({ id: null })
            updateServiceDisabled(false)
        }
    }, [cruiseId])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new CruiseServiceModel({ ...values, scriptDate }, true).toDTO(),
                type: services.CRUISE
            },
            image,
            redirectTo: previousPath
        })
        reset()
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        updateImage(null)
    }
    return (
        <>
            <WrapperPadding>
                <Panel backgroundImageUrl={cruise && cruise.getImage()} icon="ship" uploadImage={updateImage} />
            </WrapperPadding>
            <FormBuilder
                clients={props.clients}
                disabled={serviceDisabled}
                fields={cruiseFormFields}
                initialValues={cruise ? cruise.toForm() : { boarding: { date: scriptDate } }}
                onSubmit={callSaveData}
                rangeDates={travelScript && travelScript.getRangeDates()}
                ref={process.env.__TEST__ ? null : form}
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

CruiseForm.defaultProps = {
    clients: [],
    cruise: {},
    travelScript: {}
}

CruiseForm.propTypes = {
    clients: PropTypes.array,
    cruise: PropTypes.objectOf(CruiseServiceModel),
    match: PropTypes.object.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    travelScript: PropTypes.object
}

export default withRouter(CruiseForm)
