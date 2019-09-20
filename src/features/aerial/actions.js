import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.AERIAL_DEL)
const getSingleAction = createAction(actions.AERIAL_GET_SINGLE)
const requestDelAction = createAction(actions.AERIAL_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.AERIAL_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.AERIAL_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.AERIAL_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
