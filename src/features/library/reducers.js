import { handleActions } from 'redux-actions'
import { List } from 'immutable'

import {
    delAction,
    filterAction,
    resetSuggestionsAction,
    saveDataAction,
    setCityListAction,
    setListAction,
    setSelectedCityAction
} from '@features/library/actions'
import { store } from '@features/library/store'

const reducers = handleActions(
    {
        [delAction]: (state, { payload: id }) => {
            const oldList = state.get('_listFilter').toJS()
            const newList = oldList.filter(item => item.id !== id)
            return state.merge({ _listFilter: List(newList), list: List(newList) })
        },
        [filterAction]: (state, { payload }) => {
            const listFilter = state.get('_listFilter').toJS()
            const newList = listFilter.filter(item => item.filter(payload))
            return state.set('list', List(newList))
        },
        [resetSuggestionsAction]: state => state.merge({ _listFilter: List(), list: List() }),
        [saveDataAction]: (state, { payload }) => {
            const { id, v } = payload
            const oldList = state.get('_listFilter').toJS()
            let newList = null
            if (v > 0) {
                const findIndex = oldList.findIndex(item => item.id === id)
                oldList.splice(findIndex, 1, payload)
                newList = oldList
            } else {
                newList = List([...oldList, payload])
            }
            return state.merge({ _listFilter: List(newList), list: List(newList) })
        },
        [setCityListAction]: (state, { payload: cityList }) => state.set('cityList', List(cityList)),
        [setListAction]: (state, { payload: { list, updateRecords } }) => {
            const nextState = updateRecords ? state.set('hadRecords', list.length > 0) : state
            return nextState.merge({ _listFilter: List(list), list: List(list) })
        },
        [setSelectedCityAction]: (state, { payload }) => state.set('selectedCity', payload)
    },
    store
)

export { reducers }
