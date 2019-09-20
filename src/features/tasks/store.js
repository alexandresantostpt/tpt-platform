import { List, Record } from 'immutable'

const store = Record({
    _listFilter: List(),
    list: List()
})()

export { store }
