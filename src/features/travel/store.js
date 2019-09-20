import { List, Record } from 'immutable'

const store = Record({
    _listFilter: List(),
    archiveds: List(),
    list: List(),
    obj: null,
    suggestions: []
})()

export { store }
