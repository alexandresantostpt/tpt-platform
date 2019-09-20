import { actions } from './constants'

import { createAction } from '@utils/actions'

const getSingleAction = createAction(actions.AGENCY_GET_SINGLE)
const getListAction = createAction(actions.AGENCY_GET_LIST)
const requestGetSingleAction = createAction(actions.AGENCY_REQUEST_GET_SINGLE)
const requestGetListAction = createAction(actions.AGENCY_REQUEST_GET_LIST)
const requestResetAction = createAction(actions.AGENCY_REQUEST_RESET)
const requestSearchAction = createAction(actions.AGENCY_REQUEST_SEARCH)
const requestSaveDataAction = createAction(actions.AGENCY_REQUEST_SAVE_DATA)
const resetAction = createAction(actions.AGENCY_RESET)
const saveDataAction = createAction(actions.AGENCY_SAVE_DATA)
const searchAction = createAction(actions.AGENCY_SEARCH)

export {
    getSingleAction,
    getListAction,
    requestGetSingleAction,
    requestGetListAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction,
    resetAction,
    saveDataAction,
    searchAction
}
