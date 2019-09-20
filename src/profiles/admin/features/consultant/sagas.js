import { actions } from './constants'
import { times } from '@constants/times'

import { all, call, debounce, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { delAPI, getAllAPI, getSingleAPI, saveAPI } from './api'

import { delAction, getListAction, getSingleAction, resetAction, saveDataAction, searchAction } from './actions'

import { getAction } from '@utils/actions'

import Toast from '@components/toast'

function* delRequested({ payload: { id } }) {
    try {
        yield call(delAPI, id)
        yield put(delAction(id))
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

function* saveDataRequested({ payload }) {
    try {
        const { _id: id } = payload
        const newConsultant = yield call(saveAPI, payload)
        yield put(saveDataAction(newConsultant))
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

function* searchRequested({ payload }) {
    yield put(searchAction(payload))
}

function* watchDelRequest() {
    yield takeLatest(getAction(actions.CONSULTANT_REQUEST_DEL), delRequested)
}

function* watchGetListRequest() {
    yield takeLatest(getAction(actions.CONSULTANT_REQUEST_GET_LIST), getListRequested)
}

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.CONSULTANT_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.CONSULTANT_REQUEST_SAVE_DATA), saveDataRequested)
}

function* watchResetRequest() {
    yield takeLatest(getAction(actions.CONSULTANT_REQUEST_RESET), resetRequested)
}

function* watchSearchRequest() {
    yield debounce(times.HALF_SECOND, getAction(actions.CONSULTANT_REQUEST_SEARCH), searchRequested)
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
