import { connect } from 'react-redux'

import {
    requestCloseMaterialAction,
    requestDelServiceAction,
    requestGetSingleAction,
    requestShareTravelAction,
    requestUnshareAction,
    requestUpdateCityAction,
    requestUpdateMaterialAction
} from '../actions'

import { getClientsSelector, getObjSelector, getUsersSelector } from '../selectors'

import TravelScriptList from '../pages/TravelScriptList'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    travelScript: getObjSelector(state),
    users: getUsersSelector(state)
})

const mapDispatchToProps = {
    requestCloseMaterialAction,
    requestDelServiceAction,
    requestGetSingleAction,
    requestShareTravelAction,
    requestUnshareAction,
    requestUpdateCityAction,
    requestUpdateMaterialAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelScriptList)
