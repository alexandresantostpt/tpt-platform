import { connect } from 'react-redux'

import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'
import { requestGetSingleAction as travelRequestGetSingleAction } from '@features/travelScript/actions'

import { getObjSelector } from '../selectors'
import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'
import HotelForm from '../pages/HotelForm'

import { resetSuggestionsAction, searchLibraryAction } from '@features/library/actions'
import { getListSelector } from '@features/library/selectors'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    hotel: getObjSelector(state),
    hotelSuggestions: getListSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    resetSuggestionsAction,
    searchLibraryAction,
    travelRequestGetSingleAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelForm)
