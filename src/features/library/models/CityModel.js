import moment from 'moment'

class CityModel {
    constructor({ __v, _id, createdAt, name, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._createdAt = moment(createdAt).utc(false)
        this._name = name
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

    get name() {
        return this._name
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            name: this.name
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            name: this.name
        }
    }
}

export default CityModel
