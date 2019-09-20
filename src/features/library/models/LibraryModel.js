import { config } from '@config'

import { formats } from '@constants/dateFormats'

import moment from 'moment'

import { i18n } from '@i18n'

import { isNotEmpty } from '@utils/functions'

class LibraryModel {
    constructor({
        __v,
        _id,
        address,
        any,
        category,
        city,
        createdAt,
        describe,
        differences,
        duration,
        image,
        language,
        name,
        subCategory,
        tourType,
        type,
        updatedAt
    }) {
        this.__v = __v
        this._address = address
        this._any = any
        this._id = _id
        this._category = category
        this._city = city
        this._createdAt = moment(createdAt).utc(false)
        this._describe = describe
        this._differences = differences
        this._duration = duration
        this._image = image
        this._language = language
        this._name = name
        this._subCategory = subCategory
        this._tourType = tourType
        this._updatedAt = moment(updatedAt).utc(false)
        this._type = type ? i18n.t(`types.service.${type.replace(/^LIBRARY_/, '')}`) : null
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

    get any() {
        return this._any
    }

    get category() {
        return this._category
    }

    get city() {
        return this._city
    }

    get createdAt() {
        return this._createdAt
    }

    get differences() {
        return this._differences
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

    get destiny() {
        return this.city && this.city.name
    }

    get language() {
        return this._language
    }

    get name() {
        return this._name
    }

    get subCategory() {
        return this._subCategory
    }

    get tourType() {
        return this._tourType
    }

    get type() {
        return this._type
    }

    get updatedAt() {
        return this._updatedAt
    }

    get lastAccess() {
        return this._updatedAt.format(formats.brasilian)
    }

    filter({ categories, filter }) {
        if (isNotEmpty(categories)) {
            return categories.includes(this.subCategory)
        }
        if (filter) {
            const regex = new RegExp(`(${filter})`, 'gi')
            return regex.test(this.describe || '') || regex.test(this.name || '')
        }
        return true
    }

    getImage() {
        return this.image && `${config.api.url}/library/download/${this.image}`
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address || null,
            any: this.any || null,
            category: this.category || null,
            city: this.city || null,
            describe: this.describe || null,
            differences: this.differences || null,
            duration: this.duration || null,
            language: this.language || null,
            name: this.name || null,
            subCategory: this.subCategory || null,
            tourType: this.tourType || null,
            type: this.type || null
        }
    }

    toForm() {
        return {
            library: {
                __v: this.v,
                _id: this.id,
                address: this.address,
                any: this.any,
                category: this.category,
                city: this.city,
                describe: this.describe,
                differences: this.differences,
                duration: this.duration,
                language: this.language,
                name: this.name,
                subCategory: this.subCategory,
                tourType: this.tourType,
                type: this.type
            }
        }
    }
}

export default LibraryModel
