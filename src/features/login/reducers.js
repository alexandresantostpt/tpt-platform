import { handleActions } from 'redux-actions'

import { authAction, logoutAction, rememberPasswordAction, updatePasswordAction } from './actions'

import { store } from './store'

import UserModel from './UserModel'

const reducers = handleActions(
    {
        [authAction]: (state, { payload }) => {
            const { user, wrongCredentials } = payload
            return state.merge({ user, wrongCredentials })
        },
        [logoutAction]: () => store,
        [rememberPasswordAction]: (state, { payload }) => {
            const { wrongCredentials } = payload
            return state.set('wrongCredentials', wrongCredentials)
        },
        [updatePasswordAction]: (state, { payload }) => {
            const userUpdated = new UserModel(payload)
            return state.set('user', userUpdated)
        }
    },
    store
)

export { reducers }
