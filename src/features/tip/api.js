import { List } from 'immutable'

import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import TipServiceModel from './models/TipServiceModel'

const CATEGORY_API = '/category'
const ROOT_API = '/tip'

const addToLibrary = (payload, id) =>
    http({
        data: payload,
        method: 'POST',
        url: `/tip/${id}/library`
    })
        .then(({ status }) => {
            if (responseWasOK(status)) {
                return
            }
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const removeFromLibrary = (payload, id) =>
    http({
        data: payload,
        method: 'DELETE',
        url: `/tip/${id}/library`
    })
        .then(({ status }) => {
            if (responseWasOK(status)) {
                return
            }
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const delAPI = payload =>
    http({
        data: payload,
        method: 'DELETE',
        url: '/travel/script/service'
    })

const delLibraryAPI = payload =>
    http({
        data: payload,
        method: 'DELETE',
        url: '/travel/script/tip/library'
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TipServiceModel(data)
            }
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
                data.forEach(item => (response = response.push(new TipServiceModel(item))))
            }
            return response
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const getCategoryAPI = () =>
    http
        .get(CATEGORY_API)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data
            }
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
                return new TipServiceModel(data)
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
        method: 'POST',
        url: '/travel/script/tip/library'
    }).catch(error => {
        handleError(error)
        throw new Error(error)
    })

export { addToLibrary, delAPI, delLibraryAPI, getAllAPI, getCategoryAPI, getSingleAPI, removeFromLibrary, saveAPI }
