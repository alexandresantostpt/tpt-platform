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

import { restaurantFormFields } from '../fields'

import RestaurantServiceModel from '../models/RestaurantServiceModel'
import TravelScriptModel from '@features/travelScript/models/TravelScriptModel'

const Restaurant = props => {
    const { match, restaurant, travelScript } = props
    const {
        params: { id, idService }
    } = match
    const { dateId, scriptDate, scriptId } = getQueryParams()

    const form = useRef()
    const previousPath = `/travel/${id}/script`

    const [image, updateImage] = useState()
    const [serviceDisabled, updateServiceDisabled] = useState(false)

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
                service: new RestaurantServiceModel({ ...values, scriptDate }, true).toDTO(),
                type: services.RESTAURANT
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
                <Panel backgroundImageUrl={restaurant && restaurant.getImage()} icon="restaurant" uploadImage={updateImage} />
            </WrapperPadding>
            <FormBuilder
                clients={props.clients}
                disabled={serviceDisabled}
                fields={restaurantFormFields}
                initialValues={restaurant ? restaurant.toForm() : { reserveDate: scriptDate }}
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

Restaurant.defaultProps = {
    clients: [],
    restaurant: {},
    travelScript: {}
}

Restaurant.propTypes = {
    clients: PropTypes.array,
    match: PropTypes.object.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    restaurant: PropTypes.objectOf(RestaurantServiceModel),
    travelScript: PropTypes.objectOf(TravelScriptModel)
}

export default withRouter(Restaurant)
