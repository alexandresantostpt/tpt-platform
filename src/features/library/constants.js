const CONTEXT_NAME = 'LIBRARY'

const actions = {
    LIBRARY_DEL: `${CONTEXT_NAME}_DEL`,
    LIBRARY_FILTER: `${CONTEXT_NAME}_FILTER`,
    LIBRARY_REQUEST_DEL: `${CONTEXT_NAME}_REQUEST_DEL`,
    LIBRARY_REQUEST_FILTER: `${CONTEXT_NAME}_REQUEST_FILTER`,
    LIBRARY_REQUEST_GET_SINGLE: `${CONTEXT_NAME}_REQUEST_GET_SINGLE`,
    LIBRARY_REQUEST_SAVE_DATA: `${CONTEXT_NAME}_REQUEST_SAVE_DATA`,
    LIBRARY_RESET_SUGGESTIONS: `${CONTEXT_NAME}_RESET_SUGGESTIONS`,
    LIBRARY_SAVE_DATA: `${CONTEXT_NAME}_SAVE_DATA`,
    LIBRARY_SEARCH_CITY: `${CONTEXT_NAME}_SEARCH_CITY`,
    LIBRARY_SEARCH_LIBRARY: `${CONTEXT_NAME}_SEARCH_LIBRARY`,
    LIBRARY_SET_CITY_LIST: `${CONTEXT_NAME}_SET_CITY_LIST`,
    LIBRARY_SET_LIST: `${CONTEXT_NAME}_SET_LIST`,
    LIBRARY_SET_SELECTED_CITY: `${CONTEXT_NAME}_SET_SELECTED_CITY`
}

export { actions }
