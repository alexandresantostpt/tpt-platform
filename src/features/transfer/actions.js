import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.TRANSFER_DEL)
const editAction = createAction(actions.TRANSFER_EDIT)
const getSingleAction = createAction(actions.TRANSFER_GET_SINGLE)
const requestDelAction = createAction(actions.TRANSFER_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.TRANSFER_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.TRANSFER_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.TRANSFER_SAVE_DATA)

export { delAction, editAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
