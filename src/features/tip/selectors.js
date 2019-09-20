import { createSelector } from 'reselect'

const REDUCER_NAME = 'tipReducers'

const getCategoriesObservable = state => state.get(REDUCER_NAME).get('categories')
const getListObservable = state => state.get(REDUCER_NAME).get('list')
const getObjObservable = state => state.get(REDUCER_NAME).get('obj')

const getCategoriesSelector = createSelector(
    getCategoriesObservable,
    categories => categories
)

const getListSelector = createSelector(
    getListObservable,
    list => list.toJS()
)

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

export { getCategoriesSelector, getListSelector, getObjSelector }
