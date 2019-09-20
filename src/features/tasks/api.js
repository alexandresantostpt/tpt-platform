import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

const ROOT_API = '/task'

const delAPI = id => http.delete(`${ROOT_API}/${id}`)

const getAllAPI = _ =>
    http
        .get(`${ROOT_API}`)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                response = List(data)
            }
            return response
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
                return data
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { delAPI, getAllAPI, saveAPI }
