import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'

import { withRouter } from 'react-router-dom'
import { i18n } from '@i18n'
import { services } from '@/constants/services'
import { getQueryParams } from '@utils/browser'
import { isNotEmpty } from '@utils/functions'
import { colors } from '@helpers/colors'

import Button from '@components/button/Button'
import Cancel from '@components/cancel/Cancel'
import CancelLibrary from '@features/library/components/Cancel'
import FormBuilder from '@components/form/FormBuilder'
import If from '@components/if/If'
import Panel from '@components/panel/Panel'
import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import WrapperPadding from '@components/wrapper/WrapperPadding'

import Select from '../components/select/Select'
import Tabs from '../components/tabs/Tabs'
import TipServiceModel from '../models/TipServiceModel'
import { tourFormFields, hotelFormFields } from '../fields'

/* eslint-disable complexity */
const TipForm = props => {
    const TABS = {
        hotel: services.HOTEL,
        tip: services.TIP,
        tour: services.TOUR
    }
    const {
        categories,
        formDisabled,
        tip,
        match,
        onCancel,
        redirect,
        requestSearchCityGoogleApiAction,
        requestSearchCityOurApiAction,
        showCancel,
        showTabs,
        suggestions
    } = props
    const {
        params: { id }
    } = match
    const { city, cityId, dateId, form: isForm, scriptDate, scriptId, tipId } = getQueryParams()

    const form = useRef()
    const [image, updateImage] = useState()
    const [category, updateCategory] = useState(null)
    const [subCategory, updateSubCategory] = useState(null)
    const [activeTab, updateActiveTab] = useState('tip')
    const [_formDisabled, _updateFormDisabled] = useState(true)
    const hasImage = !!image || !!tip

    let previousPath = `/travel/${id}/script/tips?scriptId=${scriptId}`
    previousPath += `&scriptDate=${scriptDate}&dateId=${dateId}&tipId=${tipId}&city=${city}&cityId=${cityId}`

    useEffect(() => {
        const { requestGetCategoryAction } = props
        requestGetCategoryAction()
    }, [])

    useEffect(() => {
        _updateFormDisabled(formDisabled)
    }, [formDisabled])

    useEffect(() => {
        _updateFormDisabled(!isForm)
    }, [isForm])

    useEffect(() => {
        const { requestGetSingleAction } = props
        if (tipId && tipId !== 'undefined') {
            requestGetSingleAction({ id: tipId })
        } else {
            requestGetSingleAction({ id: null })
        }
    }, [tipId])

    useEffect(() => {
        if (tip) {
            updateActiveTab(i18n.t(`tips.${tip.type || 'Dica'}`))
        }
    }, [tip])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        const newValues = { ...values }
        if (category && subCategory) {
            newValues.library.category = category.describe
            newValues.library.subCategory = subCategory.describe
        }
        requestSaveDataAction({
            data: {
                dateId,
                scriptId,
                service: new TipServiceModel({ ...newValues, scriptDate }).toDTO(),
                type: TABS[activeTab]
            },
            image,
            redirectTo: redirect ? previousPath : null
        })
        reset()
    }

    const del = () => {
        const { requestDelAction } = props
        requestDelAction({ id: tipId, redirectTo: previousPath })
        reset()
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        updateImage(null)
    }

    const handleSelectCategory = (categorySelected, subCategorySelected) => {
        updateCategory(categorySelected)
        updateSubCategory(subCategorySelected)
    }

    const renderCancel = () => {
        if (showCancel) {
            if (activeTab === 'tip') {
                if (isNotEmpty(category)) {
                    // eslint-disable-next-line
                    if (onCancel) {
                        return <CancelLibrary onClick={onCancel} />
                    }
                    return <Cancel center link={previousPath} />
                }
            } else {
                if (onCancel) {
                    return <CancelLibrary onClick={onCancel} />
                }
                return <Cancel center link={previousPath} />
            }
        }
    }

    const formFields =
        activeTab === 'tip' && subCategory ? subCategory.fields : (activeTab === 'tour' && tourFormFields) || hotelFormFields
    const formIcon = activeTab === 'tip' ? 'heart' : (activeTab === 'tour' && 'tour') || 'hotel'

    return (
        <>
            <WrapperPadding>
                <Panel
                    backgroundImageUrl={tip && tip.getImage && tip.getImage()}
                    icon={formIcon}
                    onArquive={tipId && del}
                    requiredImage={!hasImage}
                    uploadImage={updateImage}
                >
                    <If condition={showTabs}>
                        <Tabs activeTab={activeTab} updateActiveTab={updateActiveTab} />
                    </If>
                </Panel>
            </WrapperPadding>
            <If condition={activeTab === 'tip'}>
                <Select categories={categories} onChange={handleSelectCategory} value={tip && tip.subCategory} />
            </If>
            <If condition={isNotEmpty(category) || activeTab !== 'tip'}>
                <FormBuilder
                    disabled={_formDisabled}
                    fields={formFields}
                    getSuggestions={requestSearchCityOurApiAction}
                    getSuggestions2={requestSearchCityGoogleApiAction}
                    initialValues={tip ? tip.toForm() : { boarding: { date: scriptDate } }}
                    onSubmit={callSaveData}
                    ref={process.env.__TEST__ ? null : form}
                    suggestions={suggestions}
                />
                {hasImage && (
                    <FormButtonContainer>
                        <If
                            condition={_formDisabled}
                            el={
                                <Button
                                    color={colors.purple}
                                    disabled={false}
                                    onClick={onSaveClick}
                                    text={i18n.t('buttons.saveService')}
                                />
                            }
                        >
                            <Button
                                color={colors.purple}
                                disabled={false}
                                onClick={() => _updateFormDisabled(false)}
                                text={i18n.t('buttons.editService')}
                            />
                        </If>
                    </FormButtonContainer>
                )}
            </If>
            {renderCancel()}
        </>
    )
}
/* eslint-enable complexity */
TipForm.defaultProps = {
    formDisabled: true,
    onCancel: null,
    redirect: true,
    showCancel: true,
    showTabs: false,
    suggestions: [],
    tip: {}
}

TipForm.propTypes = {
    formDisabled: PropTypes.bool,
    match: PropTypes.object.isRequired,
    onCancel: PropTypes.func,
    redirect: PropTypes.bool,
    requestDelAction: PropTypes.func.isRequired,
    requestGetCategoryAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchCityGoogleApiAction: PropTypes.func.isRequired,
    requestSearchCityOurApiAction: PropTypes.func.isRequired,
    showCancel: PropTypes.bool,
    showTabs: PropTypes.bool,
    suggestions: PropTypes.array,
    tip: PropTypes.objectOf(TipServiceModel)
}

export default withRouter(TipForm)
