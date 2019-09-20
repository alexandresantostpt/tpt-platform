import { actions } from './constants'

import { createAction } from '@utils/actions'

const closeMaterialAction = createAction(actions.TRAVEL_SCRIPT_CLOSE_MATERIAL)
const delServiceAction = createAction(actions.TRAVEL_SCRIPT_DEL_SERVICE)
const getSingleAction = createAction(actions.TRAVEL_SCRIPT_GET_SINGLE)
const requestDelServiceAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_DEL_SERVICE)
const requestCloseMaterialAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_CLOSE_MATERIAL)
const requestGetSingleAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_GET_SINGLE)
const requestShareTravelAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_SHARE)
const requestUnshareAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_UNSHARE)
const requestUpdateCityAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_CITY)
const requestUpdateMaterialAction = createAction(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_MATERIAL)
const shareTravelAction = createAction(actions.TRAVEL_SCRIPT_SHARE)
const unshareAction = createAction(actions.TRAVEL_SCRIPT_UNSHARE)
const updateCityAction = createAction(actions.TRAVEL_SCRIPT_UPDATE_CITY)
const updateMaterialAction = createAction(actions.TRAVEL_SCRIPT_UPDATE_MATERIAL)

export {
    closeMaterialAction,
    delServiceAction,
    getSingleAction,
    requestDelServiceAction,
    requestCloseMaterialAction,
    requestGetSingleAction,
    requestShareTravelAction,
    requestUnshareAction,
    requestUpdateCityAction,
    requestUpdateMaterialAction,
    shareTravelAction,
    unshareAction,
    updateCityAction,
    updateMaterialAction
}
