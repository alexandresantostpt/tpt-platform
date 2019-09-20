import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

class CruiseLandingModel {
    constructor({ date, hour, point }, fromForm = false) {
        this._date = moment(date).utc(false)
        this._hour = fromForm ? normalizeTimezone(hour) : moment(hour).utc(false)
        this._point = point
    }

    get date() {
        return this._date
    }

    get hour() {
        return this._hour
    }

    get point() {
        return this._point
    }

    toDTO() {
        return {
            date: this.date || null,
            hour: this.hour || null,
            point: this.point || null
        }
    }

    toForm() {
        return {
            date: this.date,
            hour: this.hour,
            point: this.point
        }
    }
}

export default CruiseLandingModel
