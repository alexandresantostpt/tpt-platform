import { remove } from 'lodash'
import { createSelector } from 'reselect'
import { getUser } from '@/utils/auth'
import { isNotEmpty } from '@/utils/functions'

const REDUCER_NAME = 'travelScriptReducers'

const getClientsObservable = state => state.get(REDUCER_NAME).get('obj')
const getObjObservable = state => state.get(REDUCER_NAME).get('obj')
const getUsersObservable = state => state.get(REDUCER_NAME).get('obj')

const getClientsSelector = createSelector(
    getClientsObservable,
    obj => obj && obj.travel && obj.travel.clients
)

const getObjSelector = createSelector(
    getObjObservable,
    obj => obj
)

const getUsersSelector = createSelector(
    getUsersObservable,
    obj => {
        const users = obj && obj.travel && obj.travel.users
        if (isNotEmpty(users)) {
            const currUser = getUser()
            return remove(users, user => user.email !== currUser.email)
        }
        return users
    }
)

export { getClientsSelector, getObjSelector, getUsersSelector }
