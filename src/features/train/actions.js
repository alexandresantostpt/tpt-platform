import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.TRAIN_DEL)
const editAction = createAction(actions.TRAIN_EDIT)
const getListAction = createAction(actions.TRAIN_GET_LIST)
const getSingleAction = createAction(actions.TRAIN_GET_SINGLE)
const requestDelAction = createAction(actions.TRAIN_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.TRAIN_REQUEST_GET_SINGLE)
const requestSearchAction = createAction(actions.TRAIN_REQUEST_SEARCH)
const requestSaveDataAction = createAction(actions.TRAIN_REQUEST_SAVE_DATA)
const saveDataAction = createAction(actions.TRAIN_SAVE_DATA)

export {
    delAction,
    editAction,
    getListAction,
    getSingleAction,
    requestDelAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSearchAction,
    saveDataAction
}
