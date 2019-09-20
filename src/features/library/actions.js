import { actions } from './constants'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.LIBRARY_DEL)
const filterAction = createAction(actions.LIBRARY_FILTER)
const requestDelAction = createAction(actions.LIBRARY_REQUEST_DEL)
const requestFilterAction = createAction(actions.LIBRARY_REQUEST_FILTER)
const requestGetSingleAction = createAction(actions.LIBRARY_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.LIBRARY_REQUEST_SAVE_DATA)
const resetSuggestionsAction = createAction(actions.LIBRARY_RESET_SUGGESTIONS)
const saveDataAction = createAction(actions.LIBRARY_SAVE_DATA)
const searchCityAction = createAction(actions.LIBRARY_SEARCH_CITY)
const searchLibraryAction = createAction(actions.LIBRARY_SEARCH_LIBRARY)
const setCityListAction = createAction(actions.LIBRARY_SET_CITY_LIST)
const setListAction = createAction(actions.LIBRARY_SET_LIST)
const setSelectedCityAction = createAction(actions.LIBRARY_SET_SELECTED_CITY)

export {
    delAction,
    filterAction,
    requestDelAction,
    requestFilterAction,
    requestGetSingleAction,
    requestSaveDataAction,
    resetSuggestionsAction,
    saveDataAction,
    searchCityAction,
    searchLibraryAction,
    setCityListAction,
    setListAction,
    setSelectedCityAction
}
