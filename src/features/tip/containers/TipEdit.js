import { connect } from 'react-redux'

import { requestDelLibraryAction, requestFilterAction, requestGetCategoryAction, requestGetSingleAction } from '../actions'

import { getCategoriesSelector, getObjSelector } from '../selectors'

import TipEdit from '../pages/TipEdit'

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    tip: getObjSelector(state)
})

const mapDispatchToProps = {
    requestDelLibraryAction,
    requestFilterAction,
    requestGetCategoryAction,
    requestGetSingleAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TipEdit)
