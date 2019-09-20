import { formats } from '@constants/dateFormats'

import moment from 'moment'

class ClientModel {
    constructor({ __v, _id, agency, name, email, cpf, createdAt, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._agency = agency
        this._name = name
        this._email = email
        this._cpf = cpf
        this._createdAt = moment(createdAt).utc(false)
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

    get name() {
        return this._name
    }

    get email() {
        return this._email
    }

    get cpf() {
        return this._cpf
    }

    get updatedAt() {
        return this._updatedAt
    }

    get updatedAtToString() {
        return this._updatedAt.format(formats.brasilian)
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency || null,
            cpf: this.cpf || null,
            createdAt: this.createdAt || null,
            email: this.email || null,
            name: this.name || null,
            updatedAt: this.updatedAt || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency,
            cpf: this.cpf,
            createdAt: this.createdAt,
            email: this.email,
            name: this.name,
            updatedAt: this.updatedAt
        }
    }
}

export default ClientModel
