import moment from 'moment'

import { fromBooleanValue, getBooleanValue } from '@utils/functions'

class RestaurantLibraryModel {
    constructor({
        __v,
        _id,
        acceptsReservation,
        address,
        createdAt,
        cuisine,
        description,
        dressCode,
        facebookLink,
        image,
        instagramLink,
        michelinStars,
        name,
        operationHourEnd,
        operationHourStart,
        phoneNumber,
        prizes,
        requiredReservation,
        suitableForChildren,
        site,
        updatedAt,
        workDays
    }) {
        this.__v = __v
        this._id = _id
        this._acceptsReservation = fromBooleanValue(acceptsReservation)
        this._address = address
        this._createdAt = moment(createdAt).utc(false)
        this._cuisine = cuisine
        this._description = description
        this._dressCode = dressCode
        this._facebookLink = facebookLink
        this._image = image
        this._instagramLink = instagramLink
        this._michelinStars = michelinStars
        this._name = name
        this._operationHourEnd = operationHourEnd
        this._operationHourStart = operationHourStart
        this._phoneNumber = phoneNumber
        this._prizes = prizes
        this._requiredReservation = fromBooleanValue(requiredReservation)
        this._site = site
        this._suitableForChildren = fromBooleanValue(suitableForChildren)
        this._updatedAt = moment(updatedAt).utc(false)
        this._workDays = workDays
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get acceptsReservation() {
        return this._acceptsReservation
    }

    get address() {
        return this._address
    }

    get createdAt() {
        return this._createdAt
    }

    get cuisine() {
        return this._cuisine
    }

    get description() {
        return this._description
    }

    get dressCode() {
        return this._dressCode
    }

    get facebookLink() {
        return this._facebookLink
    }

    get image() {
        return this._image
    }

    get instagramLink() {
        return this._instagramLink
    }

    get michelinStars() {
        return this._michelinStars
    }

    get name() {
        return this._name
    }

    get operationHourEnd() {
        return this._operationHourEnd
    }

    get operationHourStart() {
        return this._operationHourStart
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    get prizes() {
        return this._prizes
    }

    get requiredReservation() {
        return this._requiredReservation
    }

    get site() {
        return this._site
    }

    get suitableForChildren() {
        return this._suitableForChildren
    }

    get updatedAt() {
        return this._updatedAt
    }

    get workDays() {
        return this._workDays
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            acceptsReservation: getBooleanValue(this.acceptsReservation),
            address: this.address || null,
            cuisine: this.cuisine || null,
            description: this.description || null,
            dressCode: this.dressCode || null,
            facebookLink: this.facebookLink || null,
            image: this.image || null,
            instagramLink: this.instagramLink || null,
            michelinStars: this.michelinStars || null,
            name: this.name || null,
            operationHourEnd: this.operationHourEnd || null,
            operationHourStart: this.operationHourStart || null,
            phoneNumber: this.phoneNumber || null,
            prizes: this.prizes || null,
            requiredReservation: getBooleanValue(this.requiredReservation),
            site: this.site || null,
            suitableForChildren: getBooleanValue(this.suitableForChildren),
            workDays: this.workDays || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            acceptsReservation: this.acceptsReservation,
            address: this.address,
            cuisine: this.cuisine,
            description: this.description,
            dressCode: this.dressCode,
            facebookLink: this.facebookLink,
            image: this.image,
            instagramLink: this.instagramLink,
            michelinStars: this.michelinStars,
            name: this.name,
            operationHourEnd: this.operationHourEnd,
            operationHourStart: this.operationHourStart,
            phoneNumber: this.phoneNumber,
            prizes: this.prizes,
            requiredReservation: this.requiredReservation,
            site: this.site,
            suitableForChildren: this.suitableForChildren,
            workDays: this.workDays
        }
    }
}

export default RestaurantLibraryModel
