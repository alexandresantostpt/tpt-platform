import { connect } from 'react-redux'

import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import { requestSearchCityOurApiAction } from '@features/travel/actions'
import { getSuggestionsSelector } from '@features/travel/selectors'

import { getObjSelector } from '../selectors'
import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import AerialForm from '../pages/AerialForm'

const mapStateToProps = state => ({
    aerial: getObjSelector(state),
    clients: getClientsSelector(state),
    suggestions: getSuggestionsSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchCityOurApiAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AerialForm)
