import { connect } from 'react-redux'

import { requestGetCategoryAction, requestGetListAction, requestGetSingleAction, requestSaveDataAction } from '../actions'

import { requestFilterAction, searchLibraryAction as requestSearchLibraryAction } from '@features/library/actions'

import { getCategoriesSelector } from '../selectors'

import { getListSelector as getListSelectorTip } from '@features/library/selectors'

import TipList from '../pages/TipList'

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    list: getListSelectorTip(state)
})

const mapDispatchToProps = {
    requestFilterAction,
    requestGetCategoryAction,
    requestGetListAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchLibraryAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TipList)
