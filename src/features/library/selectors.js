import { createSelector } from 'reselect'

const REDUCER_NAME = 'libraryReducers'

const getCityListObservable = state => state.get(REDUCER_NAME).get('cityList')
const getHadRecordsObservable = state => state.get(REDUCER_NAME).get('hadRecords')
const getListObservable = state => state.get(REDUCER_NAME).get('list')
const getSelectedCityObservable = state => state.get(REDUCER_NAME).get('selectedCity')

const getCityListSelector = createSelector(
    getCityListObservable,
    cityList => cityList.toJS()
)

const getHadRecordsSelector = createSelector(
    getHadRecordsObservable,
    hasRecordsWhenSelectedCity => hasRecordsWhenSelectedCity
)

const getListSelector = createSelector(
    getListObservable,
    list => list.toJS()
)

const getSelectedCitySelector = createSelector(
    getSelectedCityObservable,
    citySelected => citySelected
)

export { getCityListSelector, getHadRecordsSelector, getListSelector, getSelectedCitySelector }
