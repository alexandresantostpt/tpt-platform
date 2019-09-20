import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.CLIENT_DEL)
const getSingleAction = createAction(actions.CLIENT_GET_SINGLE)
const getListAction = createAction(actions.CLIENT_GET_LIST)
const requestDelAction = createAction(actions.CLIENT_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.CLIENT_REQUEST_GET_SINGLE)
const requestGetListAction = createAction(actions.CLIENT_REQUEST_GET_LIST)
const requestResetAction = createAction(actions.CLIENT_REQUEST_RESET)
const requestSearchAction = createAction(actions.CLIENT_REQUEST_SEARCH)
const requestSaveDataAction = createAction(actions.CLIENT_REQUEST_SAVE_DATA)
const resetAction = createAction(actions.CLIENT_RESET)
const saveDataAction = createAction(actions.CLIENT_SAVE_DATA)
const searchAction = createAction(actions.CLIENT_SEARCH)

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
