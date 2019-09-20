import moment from 'moment'

class HotelLibraryModel {
    constructor({ __v, _id, address, createdAt, differences, image, includedMeals, name, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._address = address
        this._createdAt = moment(createdAt).utc(false)
        this._differences = differences
        this._image = image
        this._includedMeals = includedMeals
        this._name = name
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

    get differences() {
        return this._differences
    }

    get image() {
        return this._image
    }

    get includedMeals() {
        return this._includedMeals
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
            address: this.address || null,
            differences: this.differences || null,
            image: this.image || null,
            includedMeals: this.includedMeals || null,
            name: this.name || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address,
            differences: this.differences,
            image: this.image,
            includedMeals: this.includedMeals,
            name: this.name
        }
    }
}

export default HotelLibraryModel
