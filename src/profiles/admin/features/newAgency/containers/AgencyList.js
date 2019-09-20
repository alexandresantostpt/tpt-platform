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

import AgencyList from '../pages/AgencyList'

const mapStateToProps = state => ({
    agencies: getListSelector(state),
    agency: getObjSelector(state)
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
)(AgencyList)
