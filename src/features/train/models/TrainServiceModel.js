import { config } from '@config'

import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import TrainLibraryModel from './TrainLibraryModel'

class TrainServiceModel {
    constructor(
        {
            __v,
            _id,
            cityFrom,
            cityDestiny,
            companyName,
            createdAt,
            dateFrom,
            destiny,
            from,
            hourEstimatedArrival,
            hourFrom,
            library,
            passengers,
            passengersValues,
            passengerName,
            scriptDate,
            stationDestiny,
            stationFrom,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._cityFrom = cityFrom
        this._cityDestiny = cityDestiny
        this._companyName = companyName
        this._createdAt = moment(createdAt).utc(false)
        this._dateFrom = moment(dateFrom).utc(false)
        this._destiny = destiny
        this._from = from
        this._hourEstimatedArrival = fromForm ? normalizeTimezone(hourEstimatedArrival) : moment(hourEstimatedArrival).utc(false)
        this._hourFrom = fromForm ? normalizeTimezone(hourFrom) : moment(from && from.hour).utc(false)
        this._library = library ? new TrainLibraryModel(library) : null
        this._passengers = passengers
        this._passengersValues = passengersValues
        this._passengerName = passengerName
        this._scriptDate = scriptDate
        this._stationDestiny = stationDestiny
        this._stationFrom = stationFrom
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get cityFrom() {
        return this._cityFrom
    }

    get cityDestiny() {
        return this._cityDestiny
    }

    get companyName() {
        return this._companyName
    }

    get createdAt() {
        return this._createdAt
    }

    get dateFrom() {
        return this._dateFrom
    }

    get destiny() {
        return this._destiny
    }

    get from() {
        return this._from
    }

    get hourFrom() {
        return this._hourFrom
    }

    get hourEstimatedArrival() {
        return this._hourEstimatedArrival
    }

    get library() {
        return this._library
    }

    get passengers() {
        return this._passengers
    }

    get passengersValues() {
        return this._passengersValues
    }

    get passengerName() {
        return this._passengerName
    }

    get scriptDate() {
        return this._scriptDate
    }

    get stationDestiny() {
        return this._stationDestiny
    }

    get stationFrom() {
        return this._stationFrom
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/train/download/${this.library.image}`
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            companyName: this.companyName || null,
            destiny: {
                city: this.cityDestiny || null,
                state: this.stationDestiny || null
            },
            from: {
                city: this.cityFrom || null,
                date: this.dateFrom || null,
                hour: this.hourFrom || null,
                state: this.stationFrom || null
            },
            hourEstimatedArrival: this.hourEstimatedArrival || null,
            library: this.library ? this.library.toDTO() : null,
            passengers: [...this.passengers.map(item => this.passengersValues.find(passenger => passenger.client === item))],
            scriptDate: this.scriptDate
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            cityDestiny: this.destiny.city,
            cityFrom: this.from.city,
            companyName: this.companyName,
            dateFrom: this.from.date,
            hourEstimatedArrival: this.hourEstimatedArrival,
            hourFrom: this.hourFrom,
            library: this.library ? this.library.toForm() : null,
            passengers: [...this.passengers.map(item => item.client)],
            passengersValues: this.passengers,
            platform: this.platform,
            scriptDate: this.scriptDate,
            seat: this.seat,
            stationDestiny: this.destiny.state,
            stationFrom: this.from.state,
            wagon: this.wagon
        }
    }
}

export default TrainServiceModel
