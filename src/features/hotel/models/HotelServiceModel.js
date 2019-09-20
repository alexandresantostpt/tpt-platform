import { config } from '@config'
import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import HotelLibraryModel from './HotelLibraryModel'

class HotelServiceModel {
    constructor(
        {
            __v,
            _id,
            checkInDate,
            checkInHour,
            checkOutDate,
            checkOutHour,
            passengers,
            createdAt,
            guestCount,
            library,
            reserveCode,
            roomType,
            scriptDate,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._checkInDate = moment(checkInDate).utc(false)
        this._checkInHour = fromForm ? normalizeTimezone(checkInHour) : moment(checkInHour).utc(false)
        this._checkOutDate = moment(checkOutDate).utc(false)
        this._checkOutHour = fromForm ? normalizeTimezone(checkOutHour) : moment(checkOutHour).utc(false)
        this._passengers = passengers
        this._createdAt = moment(createdAt).utc(false)
        this._guestCount = guestCount
        this._library = library ? new HotelLibraryModel(library, fromForm) : null
        this._reserveCode = reserveCode
        this._roomType = roomType
        this._scriptDate = scriptDate
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get checkInDate() {
        return this._checkInDate
    }

    get checkInHour() {
        return this._checkInHour
    }

    get checkOutDate() {
        return this._checkOutDate
    }

    get checkOutHour() {
        return this._checkOutHour
    }

    get passengers() {
        return this._passengers
    }

    get createdAt() {
        return this._createdAt
    }

    get guestCount() {
        return this._guestCount
    }

    get library() {
        return this._library
    }

    get reserveCode() {
        return this._reserveCode
    }

    get roomType() {
        return this._roomType
    }

    get scriptDate() {
        return this._scriptDate
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/hotel/download/${this.library.image}`
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            checkInDate: this.checkInDate || null,
            checkInHour: this.checkInHour || null,
            checkOutDate: this.checkOutDate || null,
            checkOutHour: this.checkOutHour || null,
            guestCount: this.guestCount || null,
            library: this.library ? this.library.toDTO() : null,
            passengers: this.passengers || null,
            reserveCode: this.reserveCode || null,
            roomType: this.roomType || null,
            scriptDate: this.scriptDate || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            checkInDate: this.checkInDate,
            checkInHour: this.checkInHour,
            checkOutDate: this.checkOutDate,
            checkOutHour: this.checkOutHour,
            guestCount: this.guestCount,
            library: this.library ? this.library.toForm() : null,
            passengers: this.passengers,
            reserveCode: this.reserveCode,
            roomType: this.roomType,
            scriptDate: this.scriptDate
        }
    }
}

export default HotelServiceModel
