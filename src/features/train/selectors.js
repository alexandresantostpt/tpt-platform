import { createSelector } from 'reselect'

const REDUCER_NAME = 'trainReducers'

const getListObservable = state =>
    state
        .get(REDUCER_NAME)
        .get('list')
        .toJS()
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
