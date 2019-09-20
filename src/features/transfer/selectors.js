import { createSelector } from 'reselect'

const REDUCER_NAME = 'transferReducers'

const getObjObservable = state => state.get(REDUCER_NAME).get('obj')

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

export { getObjSelector }
