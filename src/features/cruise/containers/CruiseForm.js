import { connect } from 'react-redux'

import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import { getObjSelector } from '../selectors'
import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import CruiseForm from '../pages/CruiseForm'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    cruise: getObjSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CruiseForm)
