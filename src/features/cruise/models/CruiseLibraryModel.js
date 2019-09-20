import moment from 'moment'

class CruiseLibraryModel {
    constructor({ __v, _id, createdAt, image, name, phoneNumber, site, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._createdAt = moment(createdAt).utc(false)
        this._image = image
        this._name = name
        this._phoneNumber = phoneNumber
        this._site = site
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

    get image() {
        return this._image
    }

    get name() {
        return this._name
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    get site() {
        return this._site
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            image: this.image || null,
            name: this.name || null,
            phoneNumber: this.phoneNumber || null,
            site: this.site || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            image: this.image,
            name: this.name,
            phoneNumber: this.phoneNumber,
            site: this.site
        }
    }
}

export default CruiseLibraryModel
