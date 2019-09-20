import { handleActions } from 'redux-actions'

import { delAction, editAction, getListAction, getSingleAction, saveDataAction } from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [delAction]: (state, { payload }) => state.set('obj', null),
        [editAction]: (state, { payload }) => state.set('obj', payload),
        [getListAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [saveDataAction]: (state, { payload }) => state.set('obj', null)
    },
    store
)

export { reducers }
