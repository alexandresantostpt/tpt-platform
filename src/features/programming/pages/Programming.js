import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import QueryString from 'query-string'
import React, { useEffect, useRef, useState } from 'react'

import { colors } from '@helpers/colors'
import { i18n } from '@i18n'
import { not } from '@utils/functions'
import { services } from '@/constants/services'
import { withRouter } from 'react-router-dom'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import Panel from '@components/panel/Panel'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import WrapperPadding from '@components/wrapper/WrapperPadding'

import ProgrammingServiceModel from '../models/ProgrammingServiceModel'
import TravelScriptModel from '@features/travelScript/models/TravelScriptModel'

import { programmingFormFields } from '../fields'

const Programming = props => {
    const { match, programming } = props
    const {
        params: { id, idService }
    } = match
    const { dateId, scriptDate, scriptId } = QueryString.parse(location.search)

    const form = useRef()
    const previousPath = `/travel/${id}/script`

    const [serviceDisabled, updateServiceDisabled] = useState(false)

    useEffect(() => {
        const { travelRequestGetSingleAction, travelScript } = props
        if (not(travelScript)) {
            travelRequestGetSingleAction(id)
        }
    }, [])

    useEffect(() => {
        const { requestGetSingleAction } = props
        if (idService) {
            requestGetSingleAction(idService)
            updateServiceDisabled(true)
        } else {
            requestGetSingleAction(null)
            updateServiceDisabled(false)
        }
    }, [idService])

    const callSaveData = values => {
        const { requestSaveDataAction } = props

        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new ProgrammingServiceModel({ ...values, scriptDate }).toDTO(),
                type: services.PROGRAMMING
            },
            redirectTo: previousPath
        })
        reset()
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => PubSub.publish(events.FORM_RESET)

    return (
        <>
            <WrapperPadding>
                <Panel icon="programming" />
            </WrapperPadding>
            <FormBuilder
                disabled={serviceDisabled}
                fields={programmingFormFields}
                initialValues={programming ? programming.toForm() : {}}
                onSubmit={callSaveData}
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

Programming.defaultProps = {
    programming: {},
    travelScript: {}
}

Programming.propTypes = {
    match: PropTypes.object.isRequired,
    programming: PropTypes.objectOf(ProgrammingServiceModel),
    requestDelAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    travelRequestGetSingleAction: PropTypes.func.isRequired,
    travelScript: PropTypes.objectOf(TravelScriptModel)
}

export default withRouter(Programming)
