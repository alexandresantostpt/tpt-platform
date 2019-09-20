import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import ClientModel from './ClientModel'

const ROOT_API = '/client'

const delAPI = id =>
    http.delete(`${ROOT_API}/${id}`).catch(error => {
        handleError(error)
        throw new Error(error)
    })

const getAllAPI = () =>
    http
        .get(ROOT_API)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(item => (response = response.push(new ClientModel(item))))
            }
            return response
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const getSingleAPI = id =>
    http
        .get(`${ROOT_API}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new ClientModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = payload => {
    const { _id } = payload
    const method = _id ? 'PUT' : 'POST'

    return http({
        data: payload,
        method,
        url: ROOT_API
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new ClientModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { delAPI, getSingleAPI, getAllAPI, saveAPI }
