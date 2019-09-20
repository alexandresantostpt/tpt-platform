const REDUCER_NAME = 'toastReducers'

const getListSelector = state =>
    state
        .get(REDUCER_NAME)
        .get('list')
        .toJS()

export { getListSelector }
