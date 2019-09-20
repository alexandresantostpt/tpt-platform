import { config } from '@config'
import moment from 'moment'

import CruiseBoardingModel from './CruiseBoardingModel'
import CruiseLandingModel from './CruiseLandingModel'
import CruiseLibraryModel from './CruiseLibraryModel'

class CruiseServiceModel {
    constructor(
        {
            __v,
            _id,
            boarding,
            cabinNumber,
            cabinType,
            category,
            createdAt,
            landing,
            library,
            observation,
            passengers,
            reserveNumber,
            script,
            scriptDate,
            shipName,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._boarding = new CruiseBoardingModel(boarding, fromForm)
        this._cabinNumber = cabinNumber
        this._cabinType = cabinType
        this._category = category
        this._createdAt = moment(createdAt).utc(false)
        this._landing = new CruiseLandingModel(landing, fromForm)
        this._library = library ? new CruiseLibraryModel(library) : null
        this._passengers = passengers
        this._observation = observation
        this._reserveNumber = reserveNumber
        this._script = script
        this._scriptDate = scriptDate
        this._shipName = shipName
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get boarding() {
        return this._boarding
    }

    get cabinNumber() {
        return this._cabinNumber
    }

    get cabinType() {
        return this._cabinType
    }

    get category() {
        return this._category
    }

    get createdAt() {
        return this._createdAt
    }

    get landing() {
        return this._landing
    }

    get library() {
        return this._library
    }

    get observation() {
        return this._observation
    }

    get passengers() {
        return this._passengers
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

    get shipName() {
        return this._shipName
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/aerial/download/${this.library.image}`
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            boarding: this.boarding.toDTO() || null,
            cabinNumber: this.cabinNumber || null,
            cabinType: this.cabinType || null,
            category: this.category || null,
            landing: this.landing.toDTO() || null,
            library: this.library ? this.library.toDTO() : null,
            observation: this.observation || null,
            passengers: this.passengers || null,
            reserveNumber: this.reserveNumber || null,
            scriptDate: this.scriptDate || null,
            shipName: this.shipName || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            boarding: this.boarding.toForm(),
            cabinNumber: this.cabinNumber,
            cabinType: this.cabinType,
            category: this.category,
            landing: this.landing.toForm(),
            library: this.library ? this.library.toForm() : null,
            observation: this.observation,
            passengers: this.passengers,
            reserveNumber: this.reserveNumber,
            scriptDate: this.scriptDate,
            shipName: this.shipName
        }
    }
}

export default CruiseServiceModel
