class DriverModel {
    constructor({ howIdentify, name, phone }) {
        this._howIdentify = howIdentify
        this._name = name
        this._phone = phone
    }

    get howIdentify() {
        return this._howIdentify
    }

    get name() {
        return this._name
    }

    get phone() {
        return this._phone
    }

    toDTO() {
        return {
            howIdentify: this.howIdentify || null,
            name: this.name || null,
            phone: this.phone || null
        }
    }
}

export default DriverModel
