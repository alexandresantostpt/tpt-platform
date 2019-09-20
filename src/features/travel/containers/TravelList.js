import { connect } from 'react-redux'

import {
    requestArchiveAction,
    requestDelAction,
    requestEditAction,
    requestGetListAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction,
    requestSearchClientsAction,
    requestUnarchiveAction,
    resetSuggestionsAction
} from '../actions'

import { getListSelector, getObjSelector, getSuggestionsSelector } from '../selectors'

import TravelList from '../pages/TravelList'

const mapStateToProps = state => ({
    suggestions: getSuggestionsSelector(state),
    travel: getObjSelector(state),
    travels: getListSelector(state)
})

const mapDispatchToProps = {
    requestArchiveAction,
    requestDelAction,
    requestEditAction,
    requestGetListAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction,
    requestSearchClientsAction,
    requestUnarchiveAction,
    resetSuggestionsAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelList)
