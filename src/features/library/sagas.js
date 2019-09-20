import { actions } from '@features/library/constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { getAction } from '@utils/actions'
import { navigateTo } from '@utils/browser'
import { not } from '@utils/functions'

import { delAPI, getSingleAPI, saveAPI, searchCityAPI, searchLibraryAPI } from '@features/library/api'
import { delAction, filterAction, saveDataAction, setCityListAction, setListAction } from '@features/library/actions'
import { saveDataAction as saveDataActionTip, setObjAction } from '@features/tip/actions'

import Toast from '@components/toast'

function* delRequested({ payload: { id } }) {
    try {
        yield call(delAPI, id)
        yield put(delAction(id))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* filterRequested({ payload }) {
    yield put(filterAction(payload))
}

function* getSingleRequested({ payload: { id } }) {
    try {
        if (id) {
            const library = yield call(getSingleAPI, id)
            yield put(setObjAction(library))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* saveDataRequested({ payload }) {
    try {
        const { data, image, redirectTo } = payload
        if (data) {
            const {
                service: { library }
            } = data
            const newLibrary = yield call(saveAPI, { ...library, type: data.type }, image)
            yield put(saveDataAction(newLibrary))
            yield put(saveDataActionTip())
            if (redirectTo) {
                yield navigateTo(redirectTo)
            }
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* searchCityRequested({ payload: { name } }) {
    try {
        const cityList = yield call(searchCityAPI, name)
        yield put(setCityListAction(cityList))
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* searchLibraryRequested({ payload }) {
    try {
        if (payload) {
            const { cityId, libraryName, nextPath, type, updateRecords } = payload
            const list = yield call(searchLibraryAPI, { cityId, libraryName, type })
            if (not(list.length) && nextPath) {
                navigateTo(nextPath)
            }
            yield put(setListAction({ list, updateRecords }))
        } else {
            const list = yield call(searchLibraryAPI)
            yield put(setListAction({ list, updateRecords: true }))
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* watchFilterRequest() {
    yield takeLatest(getAction(actions.LIBRARY_REQUEST_FILTER), filterRequested)
}

function* watchRequestDel() {
    yield takeLatest(getAction(actions.LIBRARY_REQUEST_DEL), delRequested)
}

function* watchRequestGetSingle() {
    yield takeLatest(getAction(actions.LIBRARY_REQUEST_GET_SINGLE), getSingleRequested)
}

function* watchRequestSaveData() {
    yield takeLatest(getAction(actions.LIBRARY_REQUEST_SAVE_DATA), saveDataRequested)
}

function* watchSearchCity() {
    yield takeLatest(getAction(actions.LIBRARY_SEARCH_CITY), searchCityRequested)
}

function* watchSearchLibrary() {
    yield takeLatest(getAction(actions.LIBRARY_SEARCH_LIBRARY), searchLibraryRequested)
}

function* sagas() {
    yield all([
        watchFilterRequest(),
        watchRequestDel(),
        watchRequestGetSingle(),
        watchRequestSaveData(),
        watchSearchCity(),
        watchSearchLibrary()
    ])
}

export { sagas }
