import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.CRUISE_DEL)
const getSingleAction = createAction(actions.CRUISE_GET_SINGLE)
const requestDelAction = createAction(actions.CRUISE_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.CRUISE_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.CRUISE_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.CRUISE_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
