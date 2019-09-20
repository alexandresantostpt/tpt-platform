import { actions } from './constants.js'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.PROGRAMMING_DEL)
const getSingleAction = createAction(actions.PROGRAMMING_GET_SINGLE)
const requestDelAction = createAction(actions.PROGRAMMING_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.PROGRAMMING_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.PROGRAMMING_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.PROGRAMMING_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
