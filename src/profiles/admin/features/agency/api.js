import { events } from '@constants/events'

import PubSub from 'pubsub-js'

import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'
import { setBrand } from '@utils/auth'

import AgencyModel from './AgencyModel'

const ROOT_API = '/agency'

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

const saveAPI = (payload, image) => {
    const method = payload._id ? 'PUT' : 'POST'
    return http({
        data: payload,
        method,
        url: ROOT_API
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                if (image) {
                    uploadImageAPI(data._id, image)
                }
                return new AgencyModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

const uploadImageAPI = (_id, image) => {
    http({
        data: image,
        headers: {
            'Content-Type': image.type
        },
        method: 'POST',
        url: `${ROOT_API}/${_id}/upload`
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                PubSub.publish(events.CHANGE_BRAND, data.image)
                setBrand(data.image)
                return new AgencyModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { getSingleAPI, getAllAPI, saveAPI }
