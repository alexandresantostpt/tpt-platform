import { actions } from './constants'
import { times } from '@constants/times'

import { all, call, debounce, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { delAPI, getAllAPI, getSingleAPI, saveAPI } from './api'
import { delAction, getListAction, getSingleAction, resetAction, saveDataAction, searchAction } from './actions'
import { getAction } from '@utils/actions'

import { navigateTo } from '@utils/browser'

import Toast from '@components/toast'

function* delRequested({ payload }) {
    try {
        yield call(delAPI, payload)
        yield put(delAction(payload))
        yield Toast.success({
            message: i18n.t('messages.success.arquive')
        })
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getListRequested() {
    try {
        const list = yield call(getAllAPI)
        yield put(getListAction(list))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getSingleRequested({ payload: { id } }) {
    try {
        const obj = yield call(getSingleAPI, id)
        yield put(getSingleAction(obj))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* resetRequested() {
    try {
        yield put(resetAction())
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* saveDataRequested({ payload: { data, image, redirectTo } }) {
    try {
        const id = data.agency && data.agency._id
        const newAgency = yield call(saveAPI, data, image)
        yield put(saveDataAction(newAgency))
        if (id) {
            yield Toast.success({
                message: i18n.t('messages.success.update')
            })
        } else {
            yield Toast.success({
                message: i18n.t('messages.success.create')
            })
        }
        yield navigateTo(redirectTo)
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* searchRequested({ payload }) {
    try {
        yield put(searchAction(payload))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* watchDelRequest() {
    yield takeLatest(getAction(actions.NEW_AGENCY_REQUEST_DEL), delRequested)
}

function* watchGetListRequest() {
    yield takeLatest(getAction(actions.NEW_AGENCY_REQUEST_GET_LIST), getListRequested)
}

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.NEW_AGENCY_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchResetRequest() {
    yield takeLatest(getAction(actions.NEW_AGENCY_REQUEST_RESET), resetRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.NEW_AGENCY_REQUEST_SAVE_DATA), saveDataRequested)
}

function* watchSearchRequest() {
    yield debounce(times.HALF_SECOND, getAction(actions.NEW_AGENCY_REQUEST_SEARCH), searchRequested)
}

function* sagas() {
    yield all([
        watchDelRequest(),
        watchGetListRequest(),
        watchGetSingleRequest(),
        watchResetRequest(),
        watchSaveDataRequest(),
        watchSearchRequest()
    ])
}

export { sagas }
