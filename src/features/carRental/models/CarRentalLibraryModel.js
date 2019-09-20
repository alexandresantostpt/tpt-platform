import moment from 'moment'

class CarRentalLibraryModel {
    constructor({ __v, _id, address, createdAt, image, isIncluded, name, phoneNumber, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._address = address
        this._createdAt = moment(createdAt).utc(false)
        this._image = image
        this._isIncluded = isIncluded
        this._name = name
        this._phoneNumber = phoneNumber
        this._updatedAt = moment(updatedAt).utc(false)
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get address() {
        return this._address
    }

    get createdAt() {
        return this._createdAt
    }

    get image() {
        return this._image
    }

    get isIncluded() {
        return this._isIncluded
    }

    get name() {
        return this._name
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address || null,
            image: this._image || null,
            isIncluded: this.isIncluded || null,
            name: this.name || null,
            phoneNumber: this.phoneNumber || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address,
            image: this._image,
            isIncluded: this.isIncluded,
            name: this.name,
            phoneNumber: this.phoneNumber
        }
    }
}

export default CarRentalLibraryModel
