import { handleActions } from 'redux-actions'
import { List } from 'immutable'

import { delAction, saveDataAction, getAllAction } from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [delAction]: (state, { payload }) => {
            const { _listFilter } = state
            const newList = List(_listFilter.toJS().filter(item => item._id !== payload))
            return state.merge({
                _listFilter: newList,
                list: newList
            })
        },
        [getAllAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
        [logoutAction]: () => store,
        [saveDataAction]: (state, { payload }) => {
            const { _listFilter } = state
            const { _id, __v } = payload
            const listJS = _listFilter.toJS()
            let newList = null
            if (__v > 0) {
                const findIndex = listJS.findIndex(item => item._id === _id)
                listJS.splice(findIndex, 1, payload)
                newList = listJS
            } else {
                newList = List([...listJS, payload])
            }
            return state.merge({ _listFilter: List(newList), list: List(newList), obj: null })
        }
    },
    store
)

export { reducers }
