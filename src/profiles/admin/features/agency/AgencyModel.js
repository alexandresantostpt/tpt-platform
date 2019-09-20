import { config } from '@config'

import { appThemes } from './appThemes'

const DEFAULT_THEME = 2

class AgencyModel {
    constructor({ __v, _id, appTheme, businessName, cnpj, image, phoneContact, phoneEmergency, socialName }) {
        this.__v = __v
        this._id = _id
        this._appTheme = appTheme || appThemes[DEFAULT_THEME]
        this._businessName = businessName
        this._cnpj = cnpj
        this._image = image
        this._phoneContact = phoneContact
        this._phoneEmergency = phoneEmergency
        this._socialName = socialName
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get appTheme() {
        return this._appTheme
    }

    get businessName() {
        return this._businessName
    }

    get cnpj() {
        return this._cnpj
    }

    get image() {
        return this._image
    }

    get phoneContact() {
        return this._phoneContact
    }

    get phoneEmergency() {
        return this._phoneEmergency
    }

    get socialName() {
        return this._socialName
    }

    getImage() {
        return this.image && `${config.api.url}/agency/download/${this.image}`
    }

    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            appTheme: this.appTheme || null,
            businessName: this.businessName || null,
            cnpj: this.cnpj || null,
            image: this.image || null,
            phoneContact: this.phoneContact || null,
            phoneEmergency: this.phoneEmergency || null,
            socialName: this.socialName || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            appTheme: this.appTheme,
            businessName: this.businessName,
            cnpj: this.cnpj,
            image: this.image,
            phoneContact: this.phoneContact,
            phoneEmergency: this.phoneEmergency,
            socialName: this.socialName
        }
    }
}

export default AgencyModel
