import { config } from '@config'
import { events } from '@constants/events'

import PubSub from 'pubsub-js'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'

import { colors } from '@helpers/colors'
import { getQueryParams } from '@utils/browser'
import { i18n } from '@i18n'
import { isNotUndefined } from '@utils/functions'
import { services, librariesServices } from '@/constants/services'
import { withRouter } from 'react-router-dom'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import Panel from '@components/panel/Panel'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import WrapperPadding from '@components/wrapper/WrapperPadding'

import { tourFormFields } from '../fields'

import TourServiceModel from '../models/TourServiceModel'

const TourForm = props => {
    const { match, resetSuggestionsAction, searchLibraryAction, tour, tourSuggestions, travelScript } = props
    const {
        params: { id, idTour }
    } = match
    const { cityId, dateId, scriptDate, scriptId } = getQueryParams()

    const form = useRef()
    const previousPath = `/travel/${id}/script`

    const [image, updateImage] = useState()
    const [serviceDisabled, updateServiceDisabled] = useState(false)
    const [newImage, updateNewImage] = useState(null)

    useEffect(() => {
        PubSub.subscribe(events.UPDATE_IMAGE, (_, libraryImage) => {
            if (libraryImage) {
                updateNewImage(`${config.api.url}/tour/download/${libraryImage}`)
            }
        })
        return () => PubSub.unsubscribe(events.UPDATE_IMAGE)
    }, [])

    useEffect(() => {
        const { requestGetSingleAction } = props
        if (idTour) {
            requestGetSingleAction({ id: idTour })
            updateServiceDisabled(true)
        } else {
            requestGetSingleAction({ id: null })
            updateServiceDisabled(false)
        }
    }, [idTour])

    useEffect(() => {
        resetSuggestionsAction()
    }, [scriptDate])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new TourServiceModel({ ...values, scriptDate }, true).toDTO(),
                type: services.TOUR
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
                type: librariesServices.TOUR,
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
                <Panel backgroundImageUrl={tour ? tour.getImage() : newImage || null} icon="tour" uploadImage={updateImage} />
            </WrapperPadding>
            <FormBuilder
                clients={props.clients}
                disabled={serviceDisabled}
                fields={tourFormFields}
                getSuggestions={callSearchLibrary}
                initialValues={tour ? tour.toForm() : { outDate: scriptDate }}
                onSubmit={callSaveData}
                rangeDates={travelScript && travelScript.getRangeDates()}
                ref={process.env.__TEST__ ? null : form}
                resetSuggestions={resetSuggestionsAction}
                suggestions={tourSuggestions}
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

TourForm.defaultProps = {
    clients: [],
    tour: {},
    tourSuggestions: [],
    travelScript: {}
}

TourForm.propTypes = {
    clients: PropTypes.array,
    match: PropTypes.object.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    resetSuggestionsAction: PropTypes.func.isRequired,
    searchLibraryAction: PropTypes.func.isRequired,
    tour: PropTypes.objectOf(TourServiceModel),
    tourSuggestions: PropTypes.array,
    travelScript: PropTypes.object
}

export default withRouter(TourForm)
