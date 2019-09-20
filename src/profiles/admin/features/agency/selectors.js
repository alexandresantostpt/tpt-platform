import { createSelector } from 'reselect'

const REDUCER_NAME = 'agencyReducers'

const getListObservable = state => state.get(REDUCER_NAME).get('list')
const getObjObservable = state => state.get(REDUCER_NAME).get('obj')

const getListSelector = createSelector(
    getListObservable,
    list => list.toJS()
)

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

export { getListSelector, getObjSelector }
