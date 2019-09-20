import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import TravelModel from './TravelModel'

const ROOT_API = '/travel'

const delAPI = id =>
    http.delete(`${ROOT_API}/${id}`).catch(error => {
        handleError(error)
        throw new Error(error)
    })

const archiveAPI = id =>
    http
        .patch(`${ROOT_API}/${id}/archive`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TravelModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const editAPI = id =>
    http
        .get(`${ROOT_API}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TravelModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const getAllAPI = () =>
    http
        .get(ROOT_API)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(item => (response = response.push(new TravelModel(item))))
            }
            return response
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const getArchivedsAPI = () =>
    http
        .get(`${ROOT_API}/archiveds`)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(item => (response = response.push(new TravelModel(item))))
            }
            return response
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = (payload, image) => {
    const { _id } = payload
    const method = _id ? 'PUT' : 'POST'

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
                return new TravelModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

const saveGoogleCityInOurApiAPI = payload =>
    http({
        data: payload,
        method: 'POST',
        url: '/city/google'
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

const searchCityGoogleApiAPI = value =>
    http
        .get(`/city/google/search?q=${value}`)
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

const searchCityOurApiAPI = value =>
    http
        .get(`/city/search?q=${value}`)
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

const searchClientAPI = value =>
    http
        .get(`/client/search?q=${value}`)
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

const unarchiveAPI = id =>
    http
        .patch(`${ROOT_API}/${id}/unarchive`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TravelModel(data)
            }
            return null
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
                return new TravelModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export {
    archiveAPI,
    delAPI,
    editAPI,
    getAllAPI,
    getArchivedsAPI,
    saveAPI,
    saveGoogleCityInOurApiAPI,
    searchCityGoogleApiAPI,
    searchCityOurApiAPI,
    searchClientAPI,
    unarchiveAPI
}
