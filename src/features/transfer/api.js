import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import TransferServiceModel from './models/TransferServiceModel'

const ROOT_API = '/transfer'

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
                return new TransferServiceModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = (payload, image) =>
    http({
        data: payload,
        method: 'PUT',
        url: '/travel/script/service'
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                if (image) {
                    uploadImageAPI(data._id, image)
                }
            }
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

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
                return new TransferServiceModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { delAPI, saveAPI, getSingleAPI }
