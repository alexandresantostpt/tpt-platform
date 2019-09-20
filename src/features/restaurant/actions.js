import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.RESTAURANT_DEL)
const getSingleAction = createAction(actions.RESTAURANT_GET_SINGLE)
const requestDelAction = createAction(actions.RESTAURANT_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.RESTAURANT_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.RESTAURANT_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.RESTAURANT_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
