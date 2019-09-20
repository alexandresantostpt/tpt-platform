import { actions } from './constants'

import { createAction } from '@utils/actions'

const addToastAction = createAction(actions.TOAST_ADD)
const removeToastAction = createAction(actions.TOAST_REMOVE)
const requestAddToastAction = createAction(actions.TOAST_REQUEST_ADD)
const requestRemoveToastAction = createAction(actions.TOAST_REQUEST_REMOVE)

export { addToastAction, removeToastAction, requestAddToastAction, requestRemoveToastAction }
