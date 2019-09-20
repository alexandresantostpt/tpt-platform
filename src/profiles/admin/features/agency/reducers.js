import { handleActions } from 'redux-actions'

import { getSingleAction, resetAction, saveDataAction } from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [resetAction]: state => state.set('obj', null),
        [saveDataAction]: state => state.set('obj', null)
    },
    store
)

export { reducers }
