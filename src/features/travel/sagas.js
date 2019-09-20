import { actions } from './constants'

import { times } from '@constants/times'

import { all, call, debounce, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import {
    archiveAPI,
    delAPI,
    editAPI,
    getAllAPI,
    getArchivedsAPI,
    saveAPI,
    searchCityGoogleApiAPI,
    searchCityOurApiAPI,
    searchClientAPI,
    unarchiveAPI
} from './api'

import {
    archiveAction,
    delAction,
    editAction,
    getArchivedsAction,
    getListAction,
    resetAction,
    searchAction,
    searchCityGoogleApiAction,
    searchCityOurApiAction,
    searchClientsAction,
    unarchiveAction
} from './actions'
import { resetAction as clientResetAction } from '@features/client/actions'
import { resetAction as consultantResetAction } from '@profiles/admin/features/consultant/actions'

import { getAction } from '@utils/actions'

import Toast from '@components/toast'
import { navigateTo } from '@utils/browser'

function* archiveRequested({ payload: { id } }) {
    try {
        const travelArchived = yield call(archiveAPI, id)
        yield put(archiveAction(travelArchived))
        yield Toast.success({
            message: i18n.t('messages.success.arquive')
        })
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

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

function* editRequested({ payload: { id } }) {
    try {
        const obj = yield call(editAPI, id)
        yield put(editAction(obj))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* getArchivedsRequested() {
    try {
        const list = yield call(getArchivedsAPI)
        yield put(getArchivedsAction(list))
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

function* locationChanged({ payload }) {
    const {
        action,
        location: { pathname }
    } = payload
    if (action === 'PUSH' && shouldUpdateDateAndTurn(pathname)) {
        yield put(resetAction())
        yield put(clientResetAction())
        yield put(consultantResetAction())
    }
}

const shouldUpdateDateAndTurn = actualPath => {
    const previousPath = window.sessionStorage.getItem('PREVIOUS_PATH')
    setPreviousPath(actualPath)
    if (!previousPath || actualPath.includes(previousPath.split('/')[1])) {
        return false
    }
    return true
}

const setPreviousPath = path => window.sessionStorage.setItem('PREVIOUS_PATH', path)

function* resetRequested() {
    yield put(resetAction())
}

function* saveDataRequested({ payload: { data, image } }) {
    const { _id: id } = data
    try {
        const newTravel = yield call(saveAPI, data, image)
        if (id) {
            yield Toast.success({
                message: i18n.t('messages.success.update')
            })
        } else {
            yield Toast.success({
                message: i18n.t('messages.success.create')
            })
        }
        if (newTravel) {
            navigateTo(`/travel/${newTravel._id}/script`)
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* searchRequested({ payload }) {
    yield put(searchAction(payload))
}

function* searchCityGoogleApiRequested({ payload }) {
    const newSuggestions = yield call(searchCityGoogleApiAPI, payload)
    yield put(searchCityGoogleApiAction(newSuggestions))
}

function* searchCityOurApiRequested({ payload }) {
    const newSuggestions = yield call(searchCityOurApiAPI, payload)
    yield put(searchCityOurApiAction(newSuggestions))
}

function* searchClientsRequested({ payload }) {
    const newSuggestions = yield call(searchClientAPI, payload)
    yield put(searchClientsAction(newSuggestions))
}

function* unarchiveRequested({ payload: { id } }) {
    try {
        const travelUnarchived = yield call(unarchiveAPI, id)
        yield put(unarchiveAction(travelUnarchived))
        yield Toast.success({
            message: i18n.t('messages.success.unarquive')
        })
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* watchArchiveRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_ARCHIVE), archiveRequested)
}

function* watchDelRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_DEL), delRequested)
}

function* watchEditRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_EDIT), editRequested)
}

function* watchGetArchivedsRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_GET_ARCHIVEDS), getArchivedsRequested)
}

function* watchGetListRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_GET_LIST), getListRequested)
}

function* watchLocationChangeRequest() {
    yield takeLatest('@@router/LOCATION_CHANGE', locationChanged)
}

function* watchResetRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_RESET), resetRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_SAVE_DATA), saveDataRequested)
}

function* watchSearchRequest() {
    yield debounce(times.HALF_SECOND, getAction(actions.TRAVEL_REQUEST_SEARCH), searchRequested)
}

function* watchSearchCityGoogleApiRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_SEARCH_CITY_GOOGLE_API), searchCityGoogleApiRequested)
}

function* watchSearchCityOurApiRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_SEARCH_CITY_OUR_API), searchCityOurApiRequested)
}

function* watchSearchClientsRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_SEARCH_CLIENTS), searchClientsRequested)
}

function* watchUnarchiveRequest() {
    yield takeLatest(getAction(actions.TRAVEL_REQUEST_UNARCHIVE), unarchiveRequested)
}

function* sagas() {
    yield all([
        watchArchiveRequest(),
        watchDelRequest(),
        watchEditRequest(),
        watchGetArchivedsRequest(),
        watchGetListRequest(),
        watchLocationChangeRequest(),
        watchResetRequest(),
        watchSaveDataRequest(),
        watchSearchRequest(),
        watchSearchCityGoogleApiRequest(),
        watchSearchCityOurApiRequest(),
        watchSearchClientsRequest(),
        watchUnarchiveRequest()
    ])
}

export { sagas }
