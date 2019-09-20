import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { colors } from '@helpers/colors'

import { not } from '@utils/functions'

import App from '@/containers/App'

import Autocomplete from '@/components/autocomplete/Autocomplete'
import Button from '@/components/button/Button'
import Container from '../components/Container'
import LibraryList from '@features/library/components/LibraryList'
import Search from '@/components/search/Search'
import Summary from '@/containers/Summary'
import DeleteModal from '../components/DeleteModal'

import TipForm from '@features/tip/pages/TipForm'
import TipServiceModel from '@features/tip/models/TipServiceModel'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`

const StyledSummmary = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
`

const Library = ({
    categories,
    cityList,
    list,
    requestDelAction,
    requestGetCategoryAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction,
    requestSetObjAction,
    searchCityAction,
    searchLibraryAction,
    selectedCity,
    setSelectedCityAction,
    suggestions,
    tip
}) => {
    const [searchCityName, updateSearchCityName] = useState('')
    const [searchLibraryName, updateSearcLibraryhName] = useState('')
    const [showSummary, updateShowSummary] = useState(false)
    const [formDisabled, updateFormDisabled] = useState(true)

    useEffect(() => {
        searchLibraryAction({})
    }, [])

    const openSummary = () => {
        requestSetObjAction()
        updateFormDisabled(false)
        updateShowSummary(true)
    }

    const searchCities = name => {
        searchCityAction({ name })
    }

    const searchLibrary = (cityId = selectedCity && selectedCity.id, libraryName = searchLibraryName, updateRecords = false) => {
        searchLibraryAction({ cityId, libraryName, updateRecords })
    }

    const onClearCity = () => setSelectedCityAction()

    const onSelectCity = city => {
        searchLibrary(city.id, null, true)
        setSelectedCityAction(city)
    }

    const onTypeLibraryName = name => {
        updateSearcLibraryhName(name)
        searchLibrary(null, name)
    }

    const deleteLibrary = ({ id }) => requestDelAction({ id })

    const edit = (item, disabled) => {
        requestGetSingleAction({ id: item.id })
        updateShowSummary(true)
        updateFormDisabled(disabled)
    }

    const handleAutoCompleteChange = value => {
        if (not(value)) {
            searchLibraryAction()
        }
        updateSearchCityName(value)
    }

    const handleCancel = () => updateShowSummary(false)

    const save = payload => {
        requestSaveDataAction(payload)
        updateShowSummary(false)
    }

    return (
        <App>
            <Container>
                <Header>
                    <Autocomplete
                        displayValue={city => city.name}
                        icon="location"
                        onChange={handleAutoCompleteChange}
                        onClear={onClearCity}
                        onSearch={searchCities}
                        onSelect={onSelectCity}
                        placeholder={i18n.t('placeholders.location')}
                        suggestions={cityList}
                        value={searchCityName}
                    />
                    <Search onType={onTypeLibraryName} placeholder={i18n.t('placeholders.library')} />
                    <Button color={colors.lightBlueGray} onClick={openSummary} text={i18n.t('buttons.add')} />
                </Header>
                <>
                    <LibraryList
                        canDelete
                        list={list}
                        onDelete={requestDelAction}
                        onEdit={item => edit(item, false)}
                        onRowClick={item => edit(item, true)}
                    />
                </>
            </Container>
            <Summary>
                <StyledSummmary show={showSummary}>
                    <TipForm
                        categories={categories}
                        formDisabled={formDisabled}
                        onCancel={handleCancel}
                        redirect={false}
                        requestDelAction={requestDelAction}
                        requestGetCategoryAction={requestGetCategoryAction}
                        requestGetSingleAction={requestGetSingleAction}
                        requestSaveDataAction={save}
                        requestSearchCityGoogleApiAction={requestSearchCityGoogleApiAction}
                        requestSearchCityOurApiAction={requestSearchCityOurApiAction}
                        showCancel={true}
                        showTabs={not(formDisabled)}
                        suggestions={suggestions}
                        tip={tip}
                    />
                </StyledSummmary>
            </Summary>
            <DeleteModal onDelete={deleteLibrary} translateMessage="modal.aboutToDeleteLibrary" />
        </App>
    )
}

Library.defaultProps = {
    selectedCity: null,
    suggestions: [],
    tip: {}
}

Library.propTypes = {
    categories: PropTypes.array.isRequired,
    cityList: PropTypes.array.isRequired,
    hadRecords: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetCategoryAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchCityGoogleApiAction: PropTypes.func.isRequired,
    requestSearchCityOurApiAction: PropTypes.func.isRequired,
    requestSetObjAction: PropTypes.func.isRequired,
    searchCityAction: PropTypes.func.isRequired,
    searchLibraryAction: PropTypes.func.isRequired,
    selectedCity: PropTypes.object,
    setSelectedCityAction: PropTypes.func.isRequired,
    suggestions: PropTypes.array,
    tip: PropTypes.objectOf(TipServiceModel)
}

export default withRouter(Library)
