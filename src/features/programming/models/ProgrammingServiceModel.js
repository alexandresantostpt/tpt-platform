import moment from 'moment'

class ProgrammingServiceModel {
    constructor({ __v, _id, createdAt, describe, scriptDate, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._createdAt = moment(createdAt).utc(false)
        this._describe = describe
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

    get describe() {
        return this._describe
    }

    get scriptDate() {
        return this._scriptDate
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            describe: this.describe || null,
            scriptDate: this.scriptDate || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            describe: this.describe,
            scriptDate: this.scriptDate
        }
    }
}

export default ProgrammingServiceModel
