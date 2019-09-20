import { handleActions } from 'redux-actions'
import { List } from 'immutable'

import {
    archiveAction,
    delAction,
    editAction,
    getArchivedsAction,
    getListAction,
    saveDataAction,
    resetAction,
    resetSuggestionsAction,
    searchAction,
    searchCityGoogleApiAction,
    searchCityOurApiAction,
    searchClientsAction,
    unarchiveAction
} from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

import Fuse from 'fuse.js'

const reducers = handleActions(
    {
        [archiveAction]: (state, { payload }) => {
            const { _id } = payload
            const { _listFilter, archiveds } = state
            const listJS = _listFilter.toJS()
            const archivedsJS = archiveds.toJS()

            const findIndex = listJS.findIndex(item => item.id === _id)
            listJS.splice(findIndex, 1, payload)
            const newList = listJS
            const newArchivedList = List([...archivedsJS, payload])
            return state.merge({
                _listFilter: List(newList),
                archiveds: newArchivedList,
                list: List(newList)
            })
        },
        [delAction]: (state, { payload }) => {
            const { _listFilter, archiveds } = state
            const newArchivedList = List(archiveds.toJS().filter(item => item.id !== payload))
            const newList = List(_listFilter.toJS().filter(item => item.id !== payload))
            return state.merge({
                _listFilter: newList,
                archiveds: newArchivedList,
                list: newList,
                obj: null
            })
        },
        [editAction]: (state, { payload }) => state.set('obj', payload),
        [getArchivedsAction]: (state, { payload }) => state.merge({ archiveds: payload }),
        [getListAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
        [logoutAction]: () => store,
        [resetAction]: state => state.set('obj', null),
        [resetSuggestionsAction]: state => state.set('suggestions', []),
        [saveDataAction]: (state, { payload }) => {
            const { _listFilter } = state
            const { _id, __v } = payload
            const listJS = _listFilter.toJS()
            let newList = null
            if (__v > 0) {
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
                keys: ['clients.name', 'citiesDestiny', 'status'],
                threshold: 0.3
            }
            const fuse = new Fuse(_listFilterJS, options)
            let newList = _listFilterJS

            if (payload.trim().length) {
                newList = fuse.search(payload)
            }

            return state.set('list', List(newList))
        },
        [searchCityGoogleApiAction]: (state, { payload }) => state.set('suggestions', payload),
        [searchCityOurApiAction]: (state, { payload }) => state.set('suggestions', payload),
        [searchClientsAction]: (state, { payload }) => state.set('suggestions', payload),
        [unarchiveAction]: (state, { payload }) => {
            const { _id } = payload
            const { _listFilter } = state
            const { archiveds } = state
            const listJS = _listFilter.toJS()
            const findIndex = listJS.findIndex(item => item.id === _id)
            listJS.splice(findIndex, 1, payload)
            const newList = listJS
            const newArchivedsList = List(archiveds.toJS().filter(item => item.id !== _id))
            return state.merge({
                _listFilter: List(newList),
                archiveds: List(newArchivedsList),
                list: List(newList)
            })
        }
    },
    store
)

export { reducers }
