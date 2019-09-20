import querystring from 'query-string'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import CityModel from '@/features/library/models/CityModel'
import LibraryModel from '@/features/library/models/LibraryModel'

const ROOT_API = '/library'

const delAPI = id =>
    http.delete(`${ROOT_API}/${id}`).catch(error => {
        handleError(error)
        throw new Error(error)
    })

const getSingleAPI = id =>
    http
        .get(`${ROOT_API}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new LibraryModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const saveAPI = ({ _id: id, ...payload }, image) =>
    http({
        data: payload,
        method: id ? 'PUT' : 'POST',
        url: id ? `${ROOT_API}/${id}` : `${ROOT_API}`
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                if (image) {
                    uploadImageAPI(data._id, image)
                }
                return new LibraryModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const searchCityAPI = cityName =>
    http
        .get(`/city/search?q=${cityName}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data.map(city => new CityModel(city))
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const searchLibraryAPI = params =>
    http
        .get(`${ROOT_API}?${params ? querystring.stringify(params) : ''}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data.map(library => new LibraryModel(library))
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
                return data
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })
}

export { delAPI, getSingleAPI, saveAPI, searchCityAPI, searchLibraryAPI }
