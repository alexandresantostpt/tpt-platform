import { connect } from 'react-redux'

import {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    searchCityAction,
    searchLibraryAction,
    setSelectedCityAction
} from '@features/library/actions'

import { requestGetCategoryAction, requestSetObjAction } from '@features/tip/actions'

import { requestSearchCityGoogleApiAction, requestSearchCityOurApiAction } from '@features/travel/actions'

import { getCityListSelector, getHadRecordsSelector, getListSelector, getSelectedCitySelector } from '@features/library/selectors'

import { getCategoriesSelector, getObjSelector } from '@features/tip/selectors'

import { getSuggestionsSelector } from '@features/travel/selectors'

import Library from '@features/library/pages/Library'

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    cityList: getCityListSelector(state),
    hadRecords: getHadRecordsSelector(state),
    list: getListSelector(state),
    selectedCity: getSelectedCitySelector(state),
    suggestions: getSuggestionsSelector(state),
    tip: getObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetCategoryAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction,
    requestSetObjAction,
    searchCityAction,
    searchLibraryAction,
    setSelectedCityAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Library)
