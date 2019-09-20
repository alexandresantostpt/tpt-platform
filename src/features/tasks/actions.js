import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.TASKS_DEL)
const getAllAction = createAction(actions.TASKS_GET_ALL)
const requestDelAction = createAction(actions.TASKS_REQUEST_DEL)
const requestGetAllAction = createAction(actions.TASKS_REQUEST_GET_ALL)
const requestSaveDataAction = createAction(actions.TASKS_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.TASKS_SAVE_DATA)

export { delAction, getAllAction, requestDelAction, requestGetAllAction, requestSaveDataAction, saveDataAction }
