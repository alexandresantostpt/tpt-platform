import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.HOTEL_DEL)
const getSingleAction = createAction(actions.HOTEL_GET_SINGLE)
const requestDelAction = createAction(actions.HOTEL_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.HOTEL_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.HOTEL_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.HOTEL_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
