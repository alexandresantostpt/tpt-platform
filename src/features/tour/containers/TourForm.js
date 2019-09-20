import { connect } from 'react-redux'

import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import { getObjSelector } from '../selectors'
import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import TourForm from '../pages/TourForm'

import { resetSuggestionsAction, searchLibraryAction } from '@features/library/actions'
import { getListSelector } from '@features/library/selectors'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    tour: getObjSelector(state),
    tourSuggestions: getListSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    resetSuggestionsAction,
    searchLibraryAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TourForm)
