import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.CAR_RENTAL_DEL)
const getSingleAction = createAction(actions.CAR_RENTAL_GET_SINGLE)
const requestDelAction = createAction(actions.CAR_RENTAL_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.CAR_RENTAL_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.CAR_RENTAL_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.CAR_RENTAL_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
