import { connect } from 'react-redux'

import { getObjSelector as travelGetObjSelector, getClientsSelector } from '@features/travelScript/selectors'

import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import { getObjSelector } from '../selectors'

import CarRentalForm from '../pages/CarRentalForm'

const mapStateToProps = state => ({
    clients: getClientsSelector(state),
    rent: getObjSelector(state),
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
)(CarRentalForm)
