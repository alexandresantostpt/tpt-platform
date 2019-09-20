import { handleActions } from 'redux-actions'

import { addToastAction, removeToastAction } from './actions'

import { store } from './store'

const reducers = handleActions(
    {
        [addToastAction]: (state, { payload }) => {
            const toasts = state.get('list')
            const toastIndex = toasts.toJS().findIndex(toast => toast.id === payload.id)
            if (toastIndex >= 0) {
                return state
            }
            return state.set('list', toasts.push(payload))
        },
        [removeToastAction]: (state, { payload }) => {
            const toasts = state.get('list')
            const toastIndex = toasts.toJS().findIndex(toast => toast.id === payload)
            if (toastIndex >= 0) {
                return state.set('list', toasts.delete(toastIndex))
            }
            return state
        }
    },
    store
)

export { reducers }
