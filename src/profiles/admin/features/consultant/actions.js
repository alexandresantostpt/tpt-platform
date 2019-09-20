import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.CONSULTANT_DEL)
const getSingleAction = createAction(actions.CONSULTANT_GET_SINGLE)
const getListAction = createAction(actions.CONSULTANT_GET_LIST)
const requestDelAction = createAction(actions.CONSULTANT_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.CONSULTANT_REQUEST_GET_SINGLE)
const requestGetListAction = createAction(actions.CONSULTANT_REQUEST_GET_LIST)
const requestResetAction = createAction(actions.CONSULTANT_REQUEST_RESET)
const requestSearchAction = createAction(actions.CONSULTANT_REQUEST_SEARCH)
const requestSaveDataAction = createAction(actions.CONSULTANT_REQUEST_SAVE_DATA)
const resetAction = createAction(actions.CONSULTANT_RESET)
const saveDataAction = createAction(actions.CONSULTANT_SAVE_DATA)
const searchAction = createAction(actions.CONSULTANT_SEARCH)

export {
    delAction,
    getSingleAction,
    getListAction,
    requestDelAction,
    requestGetSingleAction,
    requestGetListAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction,
    resetAction,
    saveDataAction,
    searchAction
}
