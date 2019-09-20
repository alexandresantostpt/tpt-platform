import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import ProgrammingServiceModel from './models/ProgrammingServiceModel'

const ROOT_API = '/programming'

const delAPI = payload =>
    http({
        data: payload,
        method: 'DELETE',
        url: '/travel/script/service'
    })

const getSingleAPI = id =>
    http
        .get(`${ROOT_API}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new ProgrammingServiceModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = payload =>
    http({
        data: payload,
        method: 'PUT',
        url: '/travel/script/service'
    }).catch(error => {
        handleError(error)
        throw new Error(error)
    })

export { delAPI, getSingleAPI, saveAPI }
