import { actions } from './constants'
import { events } from '@constants/events'

import PubSub from 'pubsub-js'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { getSingleAPI, saveAPI } from './api'

import { resetAction, getSingleAction, saveDataAction } from './actions'

import { getAction } from '@utils/actions'
import { navigateTo } from '@utils/browser'

import Toast from '@components/toast'

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
        const { _id: id } = data
        const newAgency = yield call(saveAPI, data, image)
        yield put(saveDataAction(newAgency))

        PubSub.publish(events.CHANGE_THEME, newAgency.appTheme)

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

function* watchGetSingleRequest() {
    yield takeLatest(getAction(actions.AGENCY_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchResetRequest() {
    yield takeLatest(getAction(actions.AGENCY_REQUEST_RESET), resetRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.AGENCY_REQUEST_SAVE_DATA), saveDataRequested)
}

function* sagas() {
    yield all([watchGetSingleRequest(), watchResetRequest(), watchSaveDataRequest()])
}

export { sagas }
