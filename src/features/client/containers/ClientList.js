import { connect } from 'react-redux'

import {
    requestDelAction,
    requestGetListAction,
    requestGetSingleAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction
} from '../actions'

import { getListSelector, getObjSelector } from '../selectors'
import { getUserSelector } from '@features/login/selectors'

import ClientList from '../pages/ClientList'

const mapStateToProps = state => ({
    client: getObjSelector(state),
    clients: getListSelector(state),
    user: getUserSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetListAction,
    requestGetSingleAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientList)
