import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

class JourneyModel {
    constructor(
        {
            airportDestiny,
            airportExit,
            cityDestiny,
            cityExit,
            companyName,
            dateArrival,
            dateExit,
            flightNumber,
            from,
            hourArrival,
            hourExit,
            passenger,
            passengers,
            to
        },
        fromForm = false
    ) {
        this._airportDestiny = airportDestiny
        this._airportExit = airportExit
        this._cityDestiny = cityDestiny
        this._cityExit = cityExit
        this._companyName = companyName
        this._dateArrival = moment(dateArrival).utc(false)
        this._dateExit = moment(dateExit).utc(false)
        this._flightNumber = flightNumber
        this._from = from
        this._hourArrival = fromForm ? normalizeTimezone(hourArrival) : moment(hourArrival).utc(false)
        this._hourExit = fromForm ? normalizeTimezone(hourExit) : moment(hourExit).utc(false)
        this._passenger = passenger
        this._passengers = passengers
        this._to = to
    }

    get airportDestiny() {
        return this._airportDestiny
    }

    get airportExit() {
        return this._airportExit
    }

    get cityDestiny() {
        return this._cityDestiny
    }

    get cityExit() {
        return this._cityExit
    }

    get companyName() {
        return this._companyName
    }

    get dateArrival() {
        return this._dateArrival
    }

    get dateExit() {
        return this._dateExit
    }

    get flightNumber() {
        return this._flightNumber.replace(' ', '\n')
    }

    get from() {
        return this._from
    }

    get hourArrival() {
        return this._hourArrival
    }

    get hourExit() {
        return this._hourExit
    }

    get passenger() {
        return this._passenger
    }

    get passengers() {
        return this._passengers
    }

    get to() {
        return this._to
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            companyName: this.companyName || null,
            flightNumber: this.flightNumber || null,
            from: {
                airport: this.airportExit || null,
                city: this.cityExit || null,
                date: this.dateExit || null,
                hour: this.hourExit || null
            },
            passengers: [...this.passenger.map(item => this.passengers.find(passenger => passenger.client === item))],
            to: {
                airport: this.airportDestiny || null,
                city: this.cityDestiny || null,
                date: this.dateArrival || null,
                hour: this.hourArrival || null
            }
        }
    }

    toForm() {
        return {
            airportDestiny: this.to.airport,
            airportExit: this.from.airport,
            cityDestiny: this.to.city,
            cityExit: this.from.city,
            companyName: this.companyName,
            dateArrival: this.to.date,
            dateExit: this.from.date,
            flightNumber: this.flightNumber,
            hourArrival: this.to.hour,
            hourExit: this.from.hour,
            passenger: [...this.passengers.map(item => item.client)],
            passengers: this.passengers
        }
    }
}

export default JourneyModel
