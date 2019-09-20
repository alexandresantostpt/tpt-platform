import { connect } from 'react-redux'

import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import { getObjSelector } from '../selectors'
import { requestGetSingleAction, requestSaveDataAction, requestSearchAction } from '../actions'

import TrainForm from '../pages/TrainForm'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    train: getObjSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainForm)
