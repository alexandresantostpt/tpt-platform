import { handleActions } from 'redux-actions'

import { delAction, editAction, getSingleAction, saveDataAction } from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [delAction]: state => state.set('obj', null),
        [editAction]: (state, { payload }) => state.set('obj', payload),
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [saveDataAction]: state => state.set('obj', null)
    },
    store
)

export { reducers }
