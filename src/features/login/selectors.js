import { createSelector } from 'reselect'

import { isEmpty } from '@utils/functions'

import { getToken } from '@utils/auth'
import { decoded } from '@utils/jwt'

import UserModel from '@features/login/UserModel'

const REDUCER_NAME = 'loginReducers'

const getUserObservable = state => state.get(REDUCER_NAME).get('user')
const getWrongCredentialsObservable = state => state.get(REDUCER_NAME).get('wrongCredentials')

const getUserSelector = createSelector(
    getUserObservable,
    user => {
        if (user) {
            return user
        }

        const jwt = getToken()

        if (isEmpty(jwt)) {
            return null
        }

        const { user: decodedUser } = decoded(jwt)
        return new UserModel(decodedUser)
    }
)

const getWrongCredentialsSelector = createSelector(
    getWrongCredentialsObservable,
    wrongCredentials => wrongCredentials
)

export { getUserSelector, getWrongCredentialsSelector }
