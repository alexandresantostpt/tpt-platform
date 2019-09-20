import { config } from '@config'

import { events } from '@constants/events'
import { librariesServices, services } from '@constants/services'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'

import { colors } from '@helpers/colors'
import { getQueryParams } from '@utils/browser'
import { i18n } from '@i18n'
import { isNotUndefined } from '@utils/functions'
import { withRouter } from 'react-router-dom'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import Panel from '@components/panel/Panel'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import WrapperPadding from '@components/wrapper/WrapperPadding'

import { hotelFormFields } from '../fields'

import HotelServiceModel from '../models/HotelServiceModel'

const HotelForm = props => {
    const { match, hotel, hotelSuggestions, resetSuggestionsAction, searchLibraryAction, travelScript } = props
    const {
        params: { id, idService }
    } = match
    const { cityId, dateId, scriptDate, scriptId } = getQueryParams()

    const form = useRef()
    const panel = useRef()
    const previousPath = `/travel/${id}/script`

    const [image, updateImage] = useState()
    const [serviceDisabled, updateServiceDisabled] = useState(false)
    const [newImage, updateNewImage] = useState(null)

    useEffect(() => {
        PubSub.subscribe(events.UPDATE_IMAGE, (_, libraryImage) => {
            updateNewImage(`${config.api.url}/hotel/download/${libraryImage}`)
        })
        return () => PubSub.unsubscribe(events.UPDATE_IMAGE)
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

    useEffect(() => {
        resetSuggestionsAction()
    }, [scriptDate])

    const callSaveData = values => {
        const { requestSaveDataAction } = props

        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new HotelServiceModel({ ...values, scriptDate }, true).toDTO(),
                type: services.HOTEL
            },
            image,
            redirectTo: previousPath
        })
        reset()
    }

    const callSearchLibrary = name => {
        if (isNotUndefined(cityId)) {
            searchLibraryAction({
                cityId: cityId,
                libraryName: name,
                type: librariesServices.HOTEL,
                updateRecords: true
            })
        }
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        updateImage(null)
    }

    return (
        <>
            <WrapperPadding>
                <Panel
                    backgroundImageUrl={hotel ? hotel.getImage() : newImage || null}
                    icon="hotel"
                    ref={panel}
                    uploadImage={updateImage}
                />
            </WrapperPadding>
            <FormBuilder
                clients={props.clients}
                disabled={serviceDisabled}
                fields={hotelFormFields}
                getSuggestions={callSearchLibrary}
                initialValues={hotel ? hotel.toForm() : { checkInDate: scriptDate }}
                onSubmit={callSaveData}
                rangeDates={travelScript && travelScript.getRangeDates()}
                ref={process.env.__TEST__ ? null : form}
                resetSuggestions={resetSuggestionsAction}
                suggestions={hotelSuggestions}
                type={services.HOTEL}
                updatePanelImage={true}
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

HotelForm.defaultProps = {
    hotel: {},
    hotelSuggestions: [],
    travelScript: {}
}

HotelForm.propTypes = {
    hotel: PropTypes.objectOf(HotelServiceModel),
    hotelSuggestions: PropTypes.array,
    match: PropTypes.object.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    resetSuggestionsAction: PropTypes.func.isRequired,
    searchLibraryAction: PropTypes.func.isRequired,
    travelScript: PropTypes.object
}

export default withRouter(HotelForm)
