import { cloneDeep } from 'lodash'
import { handleActions } from 'redux-actions'

import {
    delAction,
    delLibraryAction,
    filterAction,
    getCategoryAction,
    getListAction,
    getSingleAction,
    saveDataAction,
    setObjAction
} from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [delAction]: state => state.set('obj', null),
        [delLibraryAction]: (state, { payload }) => state.set('obj', payload),
        [filterAction]: (state, { payload }) => {
            const obj = cloneDeep(state.get('obj'))
            obj.filter(payload)
            return state.set('obj', obj)
        },
        [getCategoryAction]: (state, { payload }) => state.set('categories', payload),
        [getListAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [saveDataAction]: state => state.set('obj', null),
        [setObjAction]: (state, { payload }) => state.set('obj', payload)
    },
    store
)

export { reducers }
