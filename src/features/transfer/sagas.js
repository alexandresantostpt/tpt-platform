import { events } from '@constants/events'
import { actions } from './constants'

import PubSub from 'pubsub-js'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { delAPI, getSingleAPI, saveAPI } from './api'

import { getSingleAction, saveDataAction } from './actions'
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
            message: i18n.t('messages.success.delService')
        })
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getSingleRequested({ payload: { id } }) {
    try {
        if (id) {
            const transfer = yield call(getSingleAPI, id)
            yield put(getSingleAction(transfer))
        } else {
            yield put(getSingleAction(null))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* saveDataRequested({ payload: { data, image, redirectTo } }) {
    try {
        const { _id: id } = data
        yield call(saveAPI, data, image)
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

function* watchDelRequest() {
    yield takeLatest(getAction(actions.TRANSFER_REQUEST_DEL), delRequested)
}

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.TRANSFER_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.TRANSFER_REQUEST_SAVE_DATA), saveDataRequested)
}

function* sagas() {
    yield all([watchDelRequest(), watchGetSingleRequest(), watchSaveDataRequest()])
}

export { sagas }
