import { config } from '@config'

import moment from 'moment'

import { isNotEmpty } from '@utils/functions'
import { isObject } from '@utils/object'
import { isString } from '@/utils/string'

class TipLibraryModel {
    constructor({
        __v,
        _id,
        address,
        any,
        category,
        createdAt,
        city,
        describe,
        differences,
        duration,
        name,
        image,
        language,
        observations,
        phone,
        site,
        subCategory,
        tourType,
        updatedAt,
        workDays,
        workEnd,
        workStart
    }) {
        this._city = !isObject(city) && city.startsWith('{') ? JSON.parse(city) : city
        this.__v = __v
        this._id = _id
        this._address = address
        this._any = any
        this._category = category
        this._createdAt = moment(createdAt).utc(false)
        this._describe = describe
        this._differences = differences
        this._duration = duration
        this._name = name
        this._image = image
        this._language = language
        this._observations = observations
        this._phone = phone
        this._site = site
        this._subCategory = subCategory
        this._tourType = tourType
        this._updatedAt = moment(updatedAt).utc(false)
        this._workDays = workDays
        this._workEnd = workEnd
        this._workStart = workStart
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

    get describe() {
        return this._describe
    }

    get differences() {
        return this._differences
    }

    get duration() {
        return this._duration
    }

    get image() {
        return this._image
    }

    get language() {
        return this._language
    }

    get name() {
        return this._name
    }

    get observations() {
        return this._observations
    }

    get phone() {
        return this._phone
    }

    get site() {
        return this._site
    }

    get subCategory() {
        return this._subCategory
    }

    get tourType() {
        return this._tourType
    }

    get updatedAt() {
        return this._updatedAt
    }

    get workDays() {
        return this._workDays
    }

    get workEnd() {
        return this._workEnd
    }

    get workStart() {
        return this._workStart
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
        return this.image && `${config.api.url}/tip/download/${this.image}`
    }

    getCity() {
        if (isObject(this.city) || isString(this.city)) {
            return this.city
        }
        if (this.city && this.city.length) {
            return this.city[0]
        }
        return null
    }

    /* eslint-disable-next-line complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address || null,
            any: this.any || null,
            category: this.category || null,
            city: this.getCity(),
            describe: this.describe || null,
            differences: this.differences || null,
            duration: this.duration || null,
            image: this.image || null,
            language: this.language || null,
            name: this.name || null,
            observations: this.observations || null,
            phone: this.phone || null,
            site: this.site || null,
            subCategory: this.subCategory || null,
            tourType: this.tourType || null,
            workDays: this.workDays || null,
            workEnd: this.workEnd || null,
            workStart: this.workStart || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            address: this.address,
            any: this.any,
            category: this.category,
            city: isObject(this.city) ? this.city.name : this.city,
            describe: this.describe,
            differences: this.differences,
            duration: this.duration,
            image: this.image,
            language: this.language,
            name: this.name,
            observations: this.observations,
            phone: this.phone,
            script: this.script,
            scriptDate: this.scriptDate,
            site: this.site,
            subCategory: this.subCategory,
            tourType: this.tourType,
            workDays: this.workDays,
            workEnd: this.workEnd,
            workStart: this.workStart
        }
    }
}

export default TipLibraryModel
