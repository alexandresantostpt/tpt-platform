import { actions } from './constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { delAPI, saveAPI, getAllAPI } from './api'

import { delAction, getAllAction, saveDataAction } from './actions'

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

function* getAllRequested() {
    try {
        const tasks = yield call(getAllAPI)
        yield put(getAllAction(tasks))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* saveDataRequested({ payload }) {
    try {
        const { _id: id } = payload
        const newRental = yield call(saveAPI, payload)
        yield put(saveDataAction(newRental))
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

function* watchDelRequest() {
    yield takeLatest(getAction(actions.TASKS_REQUEST_DEL), delRequested)
}

function* watchGetAllRequest() {
    yield takeLatest(getAction(actions.TASKS_REQUEST_GET_ALL), getAllRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.TASKS_REQUEST_SAVE_DATA), saveDataRequested)
}

function* sagas() {
    yield all([watchDelRequest(), watchGetAllRequest(), watchSaveDataRequest()])
}

export { sagas }
