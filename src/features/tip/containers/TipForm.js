import { connect } from 'react-redux'

import { requestDelAction, requestGetCategoryAction, requestGetSingleAction } from '../actions'
import { requestSaveDataAction } from '@features/library/actions'
import { requestSearchCityGoogleApiAction, requestSearchCityOurApiAction } from '@features/travel/actions'

import { getCategoriesSelector, getObjSelector } from '../selectors'
import { getSuggestionsSelector } from '@features/travel/selectors'

import TipForm from '../pages/TipForm'

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    suggestions: getSuggestionsSelector(state),
    tip: getObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetCategoryAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TipForm)
