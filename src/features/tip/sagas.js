import { events } from '@constants/events'
import { actions } from './constants'

import PubSub from 'pubsub-js'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { delAPI, delLibraryAPI, getAllAPI, getCategoryAPI, getSingleAPI, saveAPI } from './api'

import {
    delLibraryAction,
    filterAction,
    getCategoryAction,
    getListAction,
    getSingleAction,
    saveDataAction,
    setObjAction
} from './actions'
import { delServiceAction } from '@features/travelScript/actions'

import { getAction } from '@utils/actions'
import { navigateTo } from '@utils/browser'

import Toast from '@components/toast'

function* delRequested({ payload }) {
    try {
        yield call(delAPI, payload)
        yield put(delServiceAction(payload))
        yield PubSub.publish(events.SERVICE_DELETED)
        yield Toast.success({
            message: i18n.t('messages.success.arquive')
        })
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* delLibraryRequested({ payload: { data } }) {
    try {
        const tip = yield call(delLibraryAPI, data)
        if (tip) {
            yield put(delLibraryAction(tip))
            yield Toast.success({
                message: i18n.t('messages.success.arquive')
            })
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* filterRequested({ payload }) {
    yield put(filterAction(payload))
}

function* getCategoryRequested() {
    try {
        const categories = yield call(getCategoryAPI)
        yield put(getCategoryAction(categories))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getListRequested() {
    try {
        const tips = yield call(getAllAPI)
        yield put(getListAction(tips))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getSingleRequested({ payload: { id } }) {
    try {
        if (id) {
            const tip = yield call(getSingleAPI, id)
            yield put(getSingleAction(tip))
        } else {
            yield put(getSingleAction(null))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* saveDataRequested({ payload: { data, redirectTo } }) {
    try {
        const { tipId: id } = data
        yield call(saveAPI, data)
        yield put(saveDataAction())
        yield navigateTo(redirectTo)
        if (id) {
            yield Toast.success({
                message: i18n.t('messages.success.update')
            })
        } else {
            yield Toast.success({
                message: i18n.t('messages.success.create')
            })
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* setObjRequested() {
    yield put(setObjAction(null))
}

function* watchDelRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_DEL), delRequested)
}

function* watchDelLibraryRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_DEL_LIBRARY), delLibraryRequested)
}

function* watchFilterRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_FILTER), filterRequested)
}

function* watchGetCategoryRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_GET_CATEGORY), getCategoryRequested)
}

function* watchGetListRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_GET_LIST), getListRequested)
}

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_SAVE_DATA), saveDataRequested)
}

function* watchSetObjRequest() {
    yield takeLatest(getAction(actions.TIP_REQUEST_SET_OBJ), setObjRequested)
}

function* sagas() {
    yield all([
        watchDelRequest(),
        watchDelLibraryRequest(),
        watchFilterRequest(),
        watchGetCategoryRequest(),
        watchGetListRequest(),
        watchGetSingleRequest(),
        watchSaveDataRequest(),
        watchSetObjRequest()
    ])
}

export { sagas }
