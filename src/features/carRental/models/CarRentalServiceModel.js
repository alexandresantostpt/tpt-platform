import { config } from '@config'

import moment from 'moment'

import { normalizeTimezone } from '@utils/date'

import CarRentalLibraryModel from './CarRentalLibraryModel'

class CarRentalServiceModel {
    constructor(
        {
            __v,
            _id,
            addressDevolution,
            addressRetire,
            agency,
            carModel,
            createdAt,
            devolution,
            devolutionDate,
            devolutionName,
            hourDevolution,
            hourRetire,
            library,
            operationHourEnd,
            operationHourStart,
            passengerResponsible,
            phoneNumberDevolution,
            phoneNumberRetire,
            requiredDocuments,
            retire,
            retireDate,
            retireName,
            scriptDate,
            siteRetire,
            travel,
            updatedAt
        },
        fromForm = false
    ) {
        this.__v = __v
        this._id = _id
        this._agency = agency
        this._addressDevolution = addressDevolution
        this._addressRetire = addressRetire
        this._carModel = carModel
        this._createdAt = moment(createdAt).utc(false)
        this._devolution = devolution
        this._devolutionDate = moment(devolutionDate).utc(false)
        this._devolutionName = devolutionName
        this._hourDevolution = fromForm ? normalizeTimezone(hourDevolution) : moment(devolution && devolution.hour).utc(false)
        this._hourRetire = fromForm ? normalizeTimezone(hourRetire) : moment(retire && retire.hour).utc(false)
        this._library = library ? new CarRentalLibraryModel(library) : null
        this._operationHourEnd = moment(operationHourEnd).utc(false)
        this._operationHourStart = moment(operationHourStart).utc(false)
        this._passengerResponsible = passengerResponsible
        this._phoneNumberDevolution = phoneNumberDevolution
        this._phoneNumberRetire = phoneNumberRetire
        this._requiredDocuments = requiredDocuments
        this._retire = retire
        this._retireDate = moment(retireDate).utc(false)
        this._retireName = retireName
        this._scriptDate = scriptDate
        this._siteRetire = siteRetire
        this._travel = travel
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get agency() {
        return this._agency
    }

    get addressDevolution() {
        return this._addressDevolution
    }

    get addressRetire() {
        return this._addressRetire
    }

    get createdAt() {
        return this._createdAt
    }

    get devolutionDate() {
        return this._devolutionDate
    }

    get carModel() {
        return this._carModel
    }

    get devolution() {
        return this._devolution
    }

    get devolutionName() {
        return this._devolutionName
    }

    get hourDevolution() {
        return this._hourDevolution
    }

    get hourRetire() {
        return this._hourRetire
    }

    get library() {
        return this._library
    }

    get operationHourEnd() {
        return this._operationHourEnd
    }

    get operationHourStart() {
        return this._operationHourStart
    }

    get passengerResponsible() {
        return this._passengerResponsible
    }

    get phoneNumberDevolution() {
        return this._phoneNumberDevolution
    }

    get phoneNumberRetire() {
        return this._phoneNumberRetire
    }

    get requiredDocuments() {
        return this._requiredDocuments
    }

    get retire() {
        return this._retire
    }

    get retireDate() {
        return this._retireDate
    }

    get retireName() {
        return this._retireName
    }

    get scriptDate() {
        return this._scriptDate
    }

    get siteRetire() {
        return this._siteRetire
    }

    get updatedAt() {
        return this._updatedAt
    }

    getImage() {
        return this.library && this.library.image && `${config.api.url}/car-rental/download/${this.library.image}`
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            addressDevolution: this.devolution.address,
            addressRetire: this.retire.address,
            carModel: this.carModel,
            devolutionDate: this.devolution.date,
            devolutionName: this.devolution.name,
            fees: this.fees,
            hourDevolution: this.hourDevolution,
            hourRetire: this.hourRetire,
            library: this.library ? this.library.toForm() : null,
            passengerResponsible: this.passengerResponsible,
            phoneNumberDevolution: this.devolution.phoneNumber,
            phoneNumberRetire: this.retire.phoneNumber,
            requiredDocuments: this.requiredDocuments.join(''),
            retireDate: this.retire.date,
            retireName: this.retire.name,
            scriptDate: this.scriptDate,
            siteRetire: this.retire.site
        }
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            carModel: this.carModel || null,
            devolution: {
                address: this.addressDevolution || null,
                date: this.devolutionDate || null,
                hour: this.hourDevolution || null,
                name: this.devolutionName || null,
                operationHourEnd: '2019-02-01T18:00:00.000Z',
                operationHourStart: '2019-02-01T09:00:00.000Z',
                phoneNumber: this.phoneNumberDevolution || null
            },
            library: this.library ? this.library.toDTO() : null,
            passengerResponsible: this.passengerResponsible || null,
            requiredDocuments: this.requiredDocuments || null,
            retire: {
                address: this.addressRetire || null,
                date: this.retireDate || null,
                hour: this.hourRetire || null,
                name: this.retireName || null,
                operationHourEnd: '2019-02-01T18:00:00.000Z',
                operationHourStart: '2019-02-01T09:00:00.000Z',
                phoneNumber: this.phoneNumberRetire || null,
                site: this.siteRetire || null
            },
            scriptDate: this.scriptDate
        }
    }
}

export default CarRentalServiceModel
