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

import ConsultantList from '../pages/ConsultantList'

const mapStateToProps = state => ({
    consultant: getObjSelector(state),
    consultants: getListSelector(state),
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
)(ConsultantList)
