import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.NEW_AGENCY_DEL)
const getSingleAction = createAction(actions.NEW_AGENCY_GET_SINGLE)
const getListAction = createAction(actions.NEW_AGENCY_GET_LIST)
const requestDelAction = createAction(actions.NEW_AGENCY_REQUEST_DEL)
const requestGetSingleAction = createAction(actions.NEW_AGENCY_REQUEST_GET_SINGLE)
const requestGetListAction = createAction(actions.NEW_AGENCY_REQUEST_GET_LIST)
const requestResetAction = createAction(actions.NEW_AGENCY_REQUEST_RESET)
const requestSearchAction = createAction(actions.NEW_AGENCY_REQUEST_SEARCH)
const requestSaveDataAction = createAction(actions.NEW_AGENCY_REQUEST_SAVE_DATA)
const resetAction = createAction(actions.NEW_AGENCY_RESET)
const saveDataAction = createAction(actions.NEW_AGENCY_SAVE_DATA)
const searchAction = createAction(actions.NEW_AGENCY_SEARCH)

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
