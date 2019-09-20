import moment from 'moment'

class TourLibraryModel {
    constructor({
        __v,
        _id,
        createdAt,
        describe,
        duration,
        image,
        includedMeals,
        language,
        name,
        phoneNumber,
        site,
        tourType,
        updatedAt
    }) {
        this.__v = __v
        this._id = _id
        this._createdAt = moment(createdAt).utc(false)
        this._describe = describe
        this._duration = duration
        this._image = image
        this._includedMeals = includedMeals
        this._language = language
        this._name = name
        this._phoneNumber = phoneNumber
        this._site = site
        this._tourType = tourType
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

    get duration() {
        return this._duration
    }

    get image() {
        return this._image
    }

    get includedMeals() {
        return this._includedMeals
    }

    get language() {
        return this._language
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

    get tourType() {
        return this._tourType
    }

    get updatedAt() {
        return this._updatedAt
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            describe: this.describe || null,
            duration: this.duration || null,
            image: this.image || null,
            includedMeals: this.includedMeals || null,
            language: this.language || null,
            name: this.name || null,
            phoneNumber: this.phoneNumber || null,
            site: this.site || null,
            tourType: this.tourType || null
        }
    }

    toForm() {
        return {
            __v: this.__v,
            _id: this.id,
            describe: this.describe,
            duration: this.duration,
            image: this.image,
            includedMeals: this.includedMeals,
            language: this.language,
            name: this.name,
            phoneNumber: this.phoneNumber,
            site: this.site,
            tourType: this.tourType
        }
    }
}

export default TourLibraryModel
