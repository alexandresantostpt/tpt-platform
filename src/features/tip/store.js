import { List, Record } from 'immutable'

const store = Record({
    _listFilter: List(),
    categories: [],
    list: List(),
    obj: null
})()

export { store }
