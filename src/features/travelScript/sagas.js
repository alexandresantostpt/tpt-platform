import { actions } from './constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { closeMaterialAPI, getSingleAPI, updateCityAPI, updateMaterialAPI, shareTravelAPI, unshareAPI } from './api'

import { requestDelAction as requestDelAerial } from '@features/aerial/actions'
import { requestDelAction as requestDelCarRental } from '@features/carRental/actions'
import { requestDelAction as requestDelCruise } from '@features/cruise/actions'
import { requestDelAction as requestDelHotel } from '@features/hotel/actions'
import { requestDelAction as requestDelProgramming } from '@features/programming/actions'
import { requestDelAction as requestDelRestaurant } from '@features/restaurant/actions'
import { requestDelAction as requestDelTip } from '@features/tip/actions'
import { requestDelAction as requestDelTour } from '@features/tour/actions'
import { requestDelAction as requestDelTrain } from '@features/train/actions'
import { requestDelAction as requestDelTransfer } from '@features/transfer/actions'

import {
    closeMaterialAction,
    getSingleAction,
    updateCityAction,
    updateMaterialAction,
    shareTravelAction,
    unshareAction
} from './actions'

import { services } from '@constants/services'
import { getAction } from '@utils/actions'

import Toast from '@components/toast'
import { i18n } from '@i18n'

import { isObject } from '@utils/object'
import { navigateTo } from '@utils/browser'
import { routes as routesTravel } from '@features/travel/routes'

const REQUEST_DEL_BY_SERVICE_TYPE = {
    [services.AERIAL]: requestDelAerial,
    [services.CAR_RENTAL]: requestDelCarRental,
    [services.CRUISE]: requestDelCruise,
    [services.HOTEL]: requestDelHotel,
    [services.PROGRAMMING]: requestDelProgramming,
    [services.RESTAURANT]: requestDelRestaurant,
    [services.TIP]: requestDelTip,
    [services.TOUR]: requestDelTour,
    [services.TRAIN]: requestDelTrain,
    [services.TRANSFER]: requestDelTransfer
}

function* delServiceRequested({ payload }) {
    const { data, type } = payload
    try {
        const requestDel = REQUEST_DEL_BY_SERVICE_TYPE[type]
        if (requestDel) {
            yield put(requestDel(data))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* closeMaterialRequested({ payload }) {
    try {
        const obj = yield call(closeMaterialAPI, payload)
        yield put(closeMaterialAction(obj))
        yield navigateTo(routesTravel[0].path)
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getSingleRequested({ payload }) {
    try {
        const id = isObject(payload) ? payload.id : payload
        if (id) {
            const obj = yield call(getSingleAPI, id)
            yield put(getSingleAction(obj))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* shareTravelRequested({ payload }) {
    try {
        const obj = yield call(shareTravelAPI, payload)
        yield put(shareTravelAction(obj))
    } catch (error) {
        Toast.error({ message: i18n.t('messages.errors.share') })
    }
}

function* unshareRequested({ payload: { travelId, userId } }) {
    try {
        yield call(unshareAPI, travelId, userId)
        yield put(unshareAction(userId))
    } catch (error) {
        Toast.error({ message: i18n.t('messages.errors.share') })
    }
}

function* updateCityRequested({ payload }) {
    try {
        const obj = yield call(updateCityAPI, payload)
        yield put(updateCityAction(obj))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* updateMaterialRequested({ payload }) {
    try {
        const obj = yield call(updateMaterialAPI, payload)
        yield put(updateMaterialAction(obj))
        yield navigateTo(routesTravel[0].path)
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* watchDelServiceRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_DEL_SERVICE), delServiceRequested)
}

function* watchCloseMaterialRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_CLOSE_MATERIAL), closeMaterialRequested)
}

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchShareTravelRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_SHARE), shareTravelRequested)
}

function* watchUnshareRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_UNSHARE), unshareRequested)
}

function* watchUpdateCityRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_CITY), updateCityRequested)
}

function* watchUpdateMaterialRequest() {
    yield takeLatest(getAction(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_MATERIAL), updateMaterialRequested)
}

function* sagas() {
    yield all([
        watchDelServiceRequest(),
        watchCloseMaterialRequest(),
        watchGetSingleRequest(),
        watchShareTravelRequest(),
        watchUnshareRequest(),
        watchUpdateCityRequest(),
        watchUpdateMaterialRequest()
    ])
}

export { sagas }
