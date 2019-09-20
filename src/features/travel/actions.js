import { actions } from './constants'

import { createAction } from '@utils/actions'

const archiveAction = createAction(actions.TRAVEL_ARCHIVE)
const delAction = createAction(actions.TRAVEL_DEL)
const editAction = createAction(actions.TRAVEL_EDIT)
const getArchivedsAction = createAction(actions.TRAVEL_GET_ARCHIVEDS)
const getListAction = createAction(actions.TRAVEL_GET_LIST)
const requestArchiveAction = createAction(actions.TRAVEL_REQUEST_ARCHIVE)
const requestDelAction = createAction(actions.TRAVEL_REQUEST_DEL)
const requestEditAction = createAction(actions.TRAVEL_REQUEST_EDIT)
const requestGetArchivedsAction = createAction(actions.TRAVEL_REQUEST_GET_ARCHIVEDS)
const requestGetListAction = createAction(actions.TRAVEL_REQUEST_GET_LIST)
const requestResetAction = createAction(actions.TRAVEL_REQUEST_RESET)
const requestSaveDataAction = createAction(actions.TRAVEL_REQUEST_SAVE_DATA)
const requestSearchAction = createAction(actions.TRAVEL_REQUEST_SEARCH)
const requestSearchCityGoogleApiAction = createAction(actions.TRAVEL_REQUEST_SEARCH_CITY_GOOGLE_API)
const requestSearchCityOurApiAction = createAction(actions.TRAVEL_REQUEST_SEARCH_CITY_OUR_API)
const requestSearchClientsAction = createAction(actions.TRAVEL_REQUEST_SEARCH_CLIENTS)
const requestUnarchiveAction = createAction(actions.TRAVEL_REQUEST_UNARCHIVE)
const resetAction = createAction(actions.TRAVEL_RESET)
const resetSuggestionsAction = createAction(actions.TRAVEL_RESET_SUGGESTIONS)
const saveDataAction = createAction(actions.TRAVEL_SAVE_DATA)
const searchAction = createAction(actions.TRAVEL_SEARCH)
const searchCityGoogleApiAction = createAction(actions.TRAVEL_SEARCH_CITY_GOOGLE_API)
const searchCityOurApiAction = createAction(actions.TRAVEL_SEARCH_CITY_OUR_API)
const searchClientsAction = createAction(actions.TRAVEL_SEARCH_CLIENTS)
const unarchiveAction = createAction(actions.TRAVEL_UNARCHIVE)

export {
    archiveAction,
    delAction,
    editAction,
    getArchivedsAction,
    getListAction,
    requestArchiveAction,
    requestDelAction,
    requestEditAction,
    requestGetArchivedsAction,
    requestGetListAction,
    requestResetAction,
    requestSaveDataAction,
    requestSearchAction,
    requestSearchCityGoogleApiAction,
    requestSearchCityOurApiAction,
    requestSearchClientsAction,
    requestUnarchiveAction,
    resetAction,
    resetSuggestionsAction,
    saveDataAction,
    searchAction,
    searchCityGoogleApiAction,
    searchCityOurApiAction,
    searchClientsAction,
    unarchiveAction
}
