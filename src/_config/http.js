import { times } from '@constants/times'
import { CODES } from '@constants/HTTP'

import axios from 'axios'

import { config } from '@config'

import { routesLogin } from '@features/login/routes'

import { getToken, isLogged } from '@utils/auth'
import { navigateTo } from '@utils/browser'

const API_URL = config.api.url

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: times.THIRDSECONDS
})

http.interceptors.request.use(request => {
    if (isLogged()) {
        request.headers.Authorization = getToken()
    }
    return request
})

http.interceptors.response.use(null, error => {
    const {
        response: { data, status }
    } = error
    if (status === CODES.UNAUTHORIZED) {
        navigateTo(routesLogin.path)
    }
    return Promise.reject(data && data.message)
})

export { http }
