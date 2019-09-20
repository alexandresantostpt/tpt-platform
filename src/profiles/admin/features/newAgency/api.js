import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import AgencyModel from './AgencyUserModel'

const ROOT_API = '/agency-user'

const delAPI = ({ agencyId, userId }) => {
    const method = 'DELETE'
    return http({
        data: {
            agency: agencyId,
            user: userId
        },
        method,
        url: ROOT_API
    }).catch(error => {
        handleError(error)
        throw new Error(error)
    })
}

const getAllAPI = () =>
    http
        .get(ROOT_API)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(item => (response = response.push(new AgencyModel(item))))
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
                return new AgencyModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = payload => {
    const hasId = payload.agency._id && payload.user._id
    const method = hasId ? 'PUT' : 'POST'
    return http({
        data: payload,
        method,
        url: ROOT_API
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new AgencyModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { delAPI, getSingleAPI, getAllAPI, saveAPI }
