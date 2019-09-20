import { createSelector } from 'reselect'

const REDUCER_NAME = 'tasksReducers'

const getListObservable = state => state.get(REDUCER_NAME).get('list')

const getListSelector = createSelector(
    getListObservable,
    list => list.toJS()
)

export { getListSelector }
