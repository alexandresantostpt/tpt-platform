import { config } from '@config'
import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import CarModel from './CarModel'
import DriverModel from './DriverModel'
import TransferLibraryModel from './TransferLibraryModel'

class TransferServiceModel {
    constructor(
        {
            __v,
            _id,
            car,
            createdAt,
            date,
            driver,
            estimatedTimeOfArrival,
            guideOrDriver,
            hour,
            library,
            localOperator,
            meetPoint,
            observation,
            passengers,
            script,
            scriptDate,
            travel,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._car = car && new CarModel(car)
        this._createdAt = moment(createdAt).utc(false)
        this._date = moment(date).utc(false)
        this._driver = driver && new DriverModel(driver)
        this._estimatedTimeOfArrival = estimatedTimeOfArrival
        this._guideOrDriver = guideOrDriver
        this._hour = fromForm ? normalizeTimezone(hour) : moment(hour).utc(false)
        this._library = library ? new TransferLibraryModel(library) : null
        this._localOperator = localOperator
        this._meetPoint = meetPoint
        this._observation = observation
        this._passengers = passengers
        this._script = script
        this._scriptDate = scriptDate
        this._travel = travel
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get car() {
        return this._car
    }

    get createdAt() {
        return this._createdAt
    }

    get date() {
        return this._date
    }

    get driver() {
        return this._driver
    }

    get estimatedTimeOfArrival() {
        return this._estimatedTimeOfArrival
    }

    get guideOrDriver() {
        return this._guideOrDriver
    }

    get hour() {
        return this._hour
    }

    get library() {
        return this._library
    }

    get localOperator() {
        return this._localOperator
    }

    get meetPoint() {
        return this._meetPoint
    }

    get observation() {
        return this._observation
    }

    get passengers() {
        return this._passengers
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

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/transfer/download/${this.library.image}`
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            car: this.car.toDTO() || null,
            date: this.date || null,
            driver: this.driver.toDTO() || null,
            estimatedTimeOfArrival: this.estimatedTimeOfArrival || null,
            guideOrDriver: this.guideOrDriver || null,
            hour: this.hour || null,
            library: this.library ? this.library.toDTO() : null,
            localOperator: this.localOperator || null,
            meetPoint: this.meetPoint || null,
            observation: this.observation || null,
            passengers: this.passengers || null,
            script: this.script || null,
            scriptDate: this.date || null,
            travel: this.travel || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            car: {
                board: this.car.board,
                model: this.car.model
            },
            date: this.date,
            driver: this.driver,
            estimatedTimeOfArrival: this.estimatedTimeOfArrival,
            guideOrDriver: this.guideOrDriver,
            hour: this.hour,
            library: this.library ? this.library.toForm() : null,
            localOperator: this.localOperator,
            meetPoint: this.meetPoint,
            observation: this.observation,
            passengers: this.passengers,
            scriptDate: this.scriptDate,
            travel: this.travel
        }
    }
}

export default TransferServiceModel
