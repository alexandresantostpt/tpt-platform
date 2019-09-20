import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.TOUR_DEL)
const getSingleAction = createAction(actions.TOUR_GET_SINGLE)
const requestDelAction = createAction(actions.TOUR_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.TOUR_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.TOUR_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.TOUR_SAVE_DATA)

export { delAction, getSingleAction, requestDelAction, requestGetSingleAction, requestSaveDataAction, saveDataAction }
