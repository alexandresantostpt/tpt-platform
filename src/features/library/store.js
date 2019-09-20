import { List, Record } from 'immutable'

const store = Record({
    _listFilter: List(),
    cityList: List(),
    hadRecords: false,
    list: List(),
    selectedCity: null
})()

export { store }
