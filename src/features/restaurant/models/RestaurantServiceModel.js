import { config } from '@config'

import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import RestaurantLibraryModel from './RestaurantLibraryModel'

class RestaurantServiceModel {
    constructor(
        {
            __v,
            _id,
            address,
            clients,
            confirmedBy,
            createdAt,
            library,
            peopleCount,
            reserveClientName,
            reserveDate,
            reserveHour,
            reserveNumber,
            script,
            scriptDate,
            title,
            travel,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._address = address
        this._clients = clients
        this._confirmedBy = confirmedBy
        this._createdAt = moment(createdAt).utc(false)
        this._library = library ? new RestaurantLibraryModel(library) : null
        this._peopleCount = peopleCount
        this._reserveClientName = reserveClientName
        this._reserveDate = moment(reserveDate).utc(false)
        this._reserveHour = fromForm ? normalizeTimezone(reserveHour) : moment(reserveHour).utc(false)
        this._reserveNumber = reserveNumber
        this._script = script
        this._scriptDate = scriptDate
        this._title = title
        this._travel = travel
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

    get clients() {
        return this._clients
    }

    get confirmedBy() {
        return this._confirmedBy
    }

    get createdAt() {
        return this._createdAt
    }

    get library() {
        return this._library
    }

    get peopleCount() {
        return this._peopleCount
    }

    get requiredReservation() {
        return this._requiredReservation
    }

    get reserveClientName() {
        return this._reserveClientName
    }

    get reserveDate() {
        return this._reserveDate
    }

    get reserveHour() {
        return this._reserveHour
    }

    get reserveNumber() {
        return this._reserveNumber
    }

    get script() {
        return this._script
    }

    get scriptDate() {
        return this._scriptDate
    }

    get travel() {
        return this._travel
    }

    get title() {
        return this._title
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/restaurant/download/${this.library.image}`
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address || null,
            clients: this.clients || null,
            confirmedBy: this.confirmedBy || null,
            library: this.library ? this.library.toDTO() : null,
            peopleCount: this.peopleCount || null,
            reserveClientName: this.reserveClientName || null,
            reserveDate: this.reserveDate || null,
            reserveHour: this.reserveHour || null,
            reserveNumber: this.reserveNumber || null,
            script: this.script || null,
            scriptDate: this.scriptDate || null,
            site: this.site || null,
            title: this.title || null,
            travel: this.travel || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address,
            clients: this.clients,
            confirmedBy: this.confirmedBy,
            library: this.library ? this.library.toForm() : null,
            peopleCount: this.peopleCount,
            reserveClientName: this.reserveClientName,
            reserveDate: this.reserveDate,
            reserveHour: this.reserveHour,
            reserveNumber: this.reserveNumber,
            scriptDate: this.scriptDate,
            title: this.title,
            travel: this.travel
        }
    }
}

export default RestaurantServiceModel
