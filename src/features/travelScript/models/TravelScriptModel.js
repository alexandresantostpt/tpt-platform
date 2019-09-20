import moment from 'moment'

import Travel from '../../travel/TravelModel'
import TravelDateModel from './TravelDateModel'
import { isNotEmpty } from '@/utils/functions'

class TravelScriptModel {
    constructor({ __v, _id, dates, deleted, edited, travel, createdAt, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._dates = dates && [...dates].map(date => new TravelDateModel(date))
        this._deleted = deleted
        this._edited = edited
        this._travel = new Travel(travel)
        this._createdAt = moment(createdAt).utc(false)
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get dates() {
        return this._dates
    }

    get deleted() {
        return this._deleted
    }

    get edited() {
        return this._edited
    }

    get travel() {
        return this._travel
    }

    get createdAt() {
        return this._createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    hasServices() {
        return this.dates.some(date => date.services.length)
    }

    getRangeDates() {
        if (isNotEmpty(this._travel)) {
            return { endDate: this._travel.travelEndDate, startDate: this._travel.travelStartDate }
        }

        return {}
    }

    getClientsId() {
        return [...this.travel.clients].map(({ _id }) => _id)
    }

    toForm() {
        return {
            dates: this.dates,
            edited: this.edited,
            id: this.id,
            travel: this.travel,
            v: this.v
        }
    }
}

export default TravelScriptModel
