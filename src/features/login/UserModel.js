import { config } from '@config'
import { roles } from '@/constants/roles'

class UserModel {
    constructor({ __v, _id, active, agency, blocked, cellPhone, cpf, email, image, logo, name, password, role, theme }) {
        this.__v = __v
        this._id = _id
        this._active = active
        this._agency = agency
        this._blocked = blocked
        this._cellPhone = cellPhone
        this._cpf = cpf
        this._email = email
        this._image = image
        this._logo = logo
        this._name = name
        this._password = password
        this._role = role
        this._theme = theme
    }

    get v() {
        return this.__v
    }

    get active() {
        return this._active
    }

    get agency() {
        return this._agency
    }

    get blocked() {
        return this._blocked
    }

    get cellPhone() {
        return this._cellPhone
    }

    get cpf() {
        return this._cpf
    }

    get email() {
        return this._email
    }

    get id() {
        return this._id
    }

    get image() {
        return this._image
    }

    getImage() {
        return this.image && `${config.api.url}/user/download/${this.image}`
    }

    get logo() {
        return this._logo
    }

    get name() {
        return this._name
    }

    get password() {
        return this._password
    }

    get role() {
        return this._role
    }

    get theme() {
        return this._theme
    }

    isAdmin = () => this._role === roles.ADMIN

    isConsultant = () => this._role === roles.CONSULTANT

    isMaster = () => this._role === roles.MASTER
}

export default UserModel
