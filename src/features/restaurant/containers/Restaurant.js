import { connect } from 'react-redux'

import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import { getObjSelector } from '../selectors'
import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import Restaurant from '../pages/Restaurant'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    restaurant: getObjSelector(state),
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
)(Restaurant)
