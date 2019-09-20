import { Record } from 'immutable'

const store = Record({
    user: null,
    wrongCredentials: false
})()

export { store }
