import { config } from '@config'
import moment from 'moment'

import AerialLibraryModel from './AerialLibraryModel'
import JourneyModel from './JourneyModel'

class AerialServiceModel {
    constructor({ __v, _id, createdAt, journeys, library, scriptDate, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._createdAt = moment(createdAt).utc(false)
        this._journeys = [...journeys.map(journey => new JourneyModel({ ...journey }))]
        this._library = library ? new AerialLibraryModel(library) : null
        this._scriptDate = scriptDate
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get createdAt() {
        return this._createdAt
    }

    get journeys() {
        return this._journeys
    }

    get library() {
        return this._library
    }

    get scriptDate() {
        return this._scriptDate
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/aerial/download/${this.library.image}`
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            journeys: [...this.journeys.map(journey => journey.toDTO())],
            library: this.library ? this.library.toDTO() : null,
            scriptDate: this.scriptDate
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            journeys: [...this.journeys.map(journey => journey.toForm())],
            library: this.library ? this.library.toForm() : null,
            scriptDate: this.scriptDate
        }
    }
}

export default AerialServiceModel
