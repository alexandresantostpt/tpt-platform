import { actions } from './constants.js'

import { createAction } from '@utils/actions'

const delAction = createAction(actions.TIP_DEL)
const delLibraryAction = createAction(actions.TIP_DEL_LIBRARY)
const filterAction = createAction(actions.TIP_FILTER)
const getCategoryAction = createAction(actions.TIP_GET_CATEGORY)
const getListAction = createAction(actions.TIP_GET_LIST)
const getSingleAction = createAction(actions.TIP_GET_SINGLE)
const requestDelAction = createAction(actions.TIP_REQUEST_DEL)
const requestDelLibraryAction = createAction(actions.TIP_REQUEST_DEL_LIBRARY)
const requestFilterAction = createAction(actions.TIP_REQUEST_FILTER)
const requestGetCategoryAction = createAction(actions.TIP_REQUEST_GET_CATEGORY)
const requestGetListAction = createAction(actions.TIP_REQUEST_GET_LIST)
const requestGetSingleAction = createAction(actions.TIP_REQUEST_GET_SINGLE)
const requestSaveDataAction = createAction(actions.TIP_REQUEST_SAVE_DATA)
const requestSetObjAction = createAction(actions.TIP_REQUEST_SET_OBJ)
const saveDataAction = createAction(actions.TIP_SAVE_DATA)
const setObjAction = createAction(actions.TIP_SET_OBJ)

export {
    delAction,
    delLibraryAction,
    filterAction,
    getCategoryAction,
    getListAction,
    getSingleAction,
    requestDelAction,
    requestDelLibraryAction,
    requestFilterAction,
    requestGetCategoryAction,
    requestGetListAction,
    requestGetSingleAction,
    requestSaveDataAction,
    requestSetObjAction,
    saveDataAction,
    setObjAction
}
