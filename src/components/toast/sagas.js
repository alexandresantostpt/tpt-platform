import { actions } from './constants'

import { all, put, takeEvery } from 'redux-saga/effects'

import { addToastAction, removeToastAction } from './actions'

import { getAction } from '@utils/actions'

function* addToastRequested({ payload }) {
    yield put(addToastAction(payload))
}

function* removeToastRequested({ payload }) {
    yield put(removeToastAction(payload))
}

function* watchRequestAddToast() {
    yield takeEvery(getAction(actions.TOAST_REQUEST_ADD), addToastRequested)
}

function* watchRequestRemoveToast() {
    yield takeEvery(getAction(actions.TOAST_REQUEST_REMOVE), removeToastRequested)
}

function* sagas() {
    yield all([watchRequestAddToast(), watchRequestRemoveToast()])
}

export { sagas }
