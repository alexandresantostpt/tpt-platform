import { connect } from 'react-redux'

import { requestDelAction, requestGetSingleAction, requestSaveDataAction } from '../actions'
import { requestGetSingleAction as travelRequestGetSingleAction } from '@features/travelScript/actions'

import { getObjSelector } from '../selectors'
import { getObjSelector as travelGetObjSelector } from '@features/travelScript/selectors'

import Programming from '../pages/Programming'

const mapStateToProps = state => ({
    programming: getObjSelector(state),
    travelScript: travelGetObjSelector(state)
})

const mapDispatchToProps = {
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    travelRequestGetSingleAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Programming)
