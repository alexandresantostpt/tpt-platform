import { config } from '@config'

import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import TourLibraryModel from './TourLibraryModel'

class TourServiceModel {
    constructor(
        {
            __v,
            _id,
            address,
            createdAt,
            guideOrDriver,
            library,
            localOperator,
            observation,
            outDate,
            outHour,
            passengers,
            peopleCount,
            scriptDate,
            transferType,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._address = address
        this._createdAt = moment(createdAt).utc(false)
        this._guideOrDriver = guideOrDriver
        this._library = library ? new TourLibraryModel(library) : null
        this._localOperator = localOperator
        this._observation = observation
        this._outDate = moment(outDate).utc(false)
        this._outHour = fromForm ? normalizeTimezone(outHour) : moment(outHour).utc(false)
        this._passengers = passengers
        this._peopleCount = peopleCount
        this._scriptDate = scriptDate
        this._transferType = transferType
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get address() {
        return this._address
    }

    get createdAt() {
        return this._createdAt
    }

    get guideOrDriver() {
        return this._guideOrDriver
    }

    get library() {
        return this._library
    }

    get localOperator() {
        return this._localOperator
    }

    get observation() {
        return this._observation
    }

    get outDate() {
        return this._outDate
    }

    get outHour() {
        return this._outHour
    }

    get passengers() {
        return this._passengers
    }

    get peopleCount() {
        return this._peopleCount
    }

    get scriptDate() {
        return this._scriptDate
    }

    get transferType() {
        return this._transferType
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/tour/download/${this.library.image}`
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address || null,
            guideOrDriver: this.guideOrDriver || null,
            library: this.library ? this.library.toDTO() : null,
            localOperator: this.localOperator || null,
            observation: this.observation || null,
            outDate: this.outDate || null,
            outHour: this.outHour || null,
            passengers: this.passengers || null,
            peopleCount: this.peopleCount || null,
            scriptDate: this.scriptDate || null,
            transferType: this.transferType || null
        }
    }

    toForm() {
        return {
            __v: this.__v,
            _id: this.id,
            address: this.address,
            guideOrDriver: this.guideOrDriver,
            library: this.library ? this.library.toForm() : null,
            localOperator: this.localOperator,
            observation: this.observation,
            outDate: this.outDate,
            outHour: this.outHour,
            passengers: this.passengers,
            peopleCount: this.peopleCount,
            script: this.script,
            scriptDate: this.scriptDate,
            transferType: this.transferType
        }
    }
}

export default TourServiceModel
