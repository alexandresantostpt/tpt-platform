import { createSelector } from 'reselect'

const REDUCER_NAME = 'travelReducers'

const getArchivedsObservable = state => state.get(REDUCER_NAME).get('archiveds')
const getListObservable = state => state.get(REDUCER_NAME).get('list')
const getObjObservable = state => state.get(REDUCER_NAME).get('obj')
const getSuggestionsObservable = state => state.get(REDUCER_NAME).get('suggestions')

const getArchivedsSelector = createSelector(
    getArchivedsObservable,
    archiveds => archiveds.toJS()
)

const getListSelector = createSelector(
    getListObservable,
    list => list.toJS()
)

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

const getSuggestionsSelector = createSelector(
    getSuggestionsObservable,
    suggestions => suggestions
)

export { getArchivedsSelector, getListSelector, getObjSelector, getSuggestionsSelector }
