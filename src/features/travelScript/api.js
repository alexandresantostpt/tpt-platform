import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import TravelScriptModel from './models/TravelScriptModel'
import TravelModel from '../travel/TravelModel'

const ROOT_API = '/travel'

const closeMaterialAPI = id =>
    http({
        method: 'POST',
        url: `${ROOT_API}/${id}/close`
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

const getSingleAPI = id =>
    http
        .get(`${ROOT_API}/${id}/script`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TravelScriptModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const shareTravelAPI = ({ id, email }) =>
    http({
        data: JSON.stringify({ email }),
        method: 'POST',
        url: `${ROOT_API}/${id}/share`
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

const unshareAPI = (travelId, userId) =>
    http({
        data: JSON.stringify({ userId }),
        method: 'POST',
        url: `${ROOT_API}/${travelId}/unshare`
    })
        .then(({ status }) => {
            if (responseWasOK(status)) {
                return true
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const updateCityAPI = ({ city, dateId, scriptId }) =>
    http({
        data: JSON.stringify({ _id: dateId, city }),
        method: 'PATCH',
        url: `${ROOT_API}/script/${scriptId}/date`
    })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return new TravelScriptModel(data)
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

const updateMaterialAPI = id =>
    http({
        method: 'PATCH',
        url: `${ROOT_API}/${id}/updateMaterial`
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

export { closeMaterialAPI, getSingleAPI, shareTravelAPI, unshareAPI, updateCityAPI, updateMaterialAPI }
