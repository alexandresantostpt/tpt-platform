import moment from 'moment'

import TravelServiceModel from './TravelServiceModel'

class TravelDateModel {
    constructor({ _id, city, date, services }) {
        this._id = _id
        this._city = city
        this._date = moment(date).utc(false)
        this._services = services && [...services].map(({ service }) => new TravelServiceModel(service))
    }

    removeService(id) {
        this._services = this._services.filter(elm => elm.id !== id)
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get date() {
        return this._date
    }

    get services() {
        return this._services
    }
}

export default TravelDateModel
