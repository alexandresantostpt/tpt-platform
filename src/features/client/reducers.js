import { handleActions } from 'redux-actions'
import { List } from 'immutable'

import { delAction, getListAction, getSingleAction, resetAction, saveDataAction, searchAction } from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'
import Fuse from 'fuse.js'

const reducers = handleActions(
    {
        [delAction]: (state, { payload }) => {
            const { _listFilter } = state
            const newList = List(_listFilter.toJS().filter(item => item.id !== payload))
            return state.merge({
                _listFilter: newList,
                list: newList,
                obj: null
            })
        },
        [getListAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [resetAction]: state => state.set('obj', null),
        [saveDataAction]: (state, { payload }) => {
            const { _listFilter } = state
            const { _id, __v } = payload
            const listJS = _listFilter.toJS()
            let newList = null
            if (__v) {
                const findIndex = listJS.findIndex(item => item.id === _id)
                listJS.splice(findIndex, 1, payload)
                newList = listJS
            } else {
                newList = List([...listJS, payload])
            }
            return state.merge({ _listFilter: List(newList), list: List(newList), obj: null })
        },
        [searchAction]: (state, { payload }) => {
            const { _listFilter } = state
            const _listFilterJS = _listFilter.toJS()
            const options = {
                keys: ['name', 'email', 'cpf'],
                threshold: 0.3
            }
            const fuse = new Fuse(_listFilterJS, options)
            let newList = _listFilterJS

            if (payload.trim().length) {
                newList = fuse.search(payload)
            }

            return state.set('list', List(newList))
        }
    },
    store
)

export { reducers }
