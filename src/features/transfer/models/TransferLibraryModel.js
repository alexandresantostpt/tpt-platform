import moment from 'moment'

class TransferLibraryModel {
    constructor({ __v, _id, assistance, createdAt, image, luggageLimite, name, transferType, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._assistance = assistance
        this._createdAt = moment(createdAt).utc(false)
        this._image = image
        this._luggageLimite = luggageLimite
        this._name = name
        this._transferType = transferType
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get assistance() {
        return this._assistance
    }

    get createdAt() {
        return this._createdAt
    }

    get image() {
        return this._image
    }

    get luggageLimite() {
        return this._luggageLimite
    }

    get name() {
        return this._name
    }

    get transferType() {
        return this._transferType
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            assistance: this.assistance || null,
            image: this.image || null,
            luggageLimite: this.luggageLimite || null,
            name: this.name || null,
            transferType: this.transferType || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            assistance: this.assistance,
            image: this.image,
            luggageLimite: this.luggageLimite,
            name: this.name,
            transferType: this.transferType
        }
    }
}

export default TransferLibraryModel
