import { createSelector } from 'reselect'

const REDUCER_NAME = 'carRentalReducers'

const getObjObservable = state => state.get(REDUCER_NAME).get('obj')

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

export { getObjSelector }
