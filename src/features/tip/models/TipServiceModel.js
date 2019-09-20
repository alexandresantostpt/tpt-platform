import TipLibraryModel from './TipLibraryModel'

class TipServiceModel {
    constructor({ __v, _id, _library, libraries, library, scriptDate }) {
        const newLibraries = libraries ? libraries.map(l => new TipLibraryModel(l)) : []
        this.__v = __v
        this._id = _id
        this._librariesFilter = newLibraries
        this._libraries = newLibraries
        this._library = library ? new TipLibraryModel(library) : null
        this.__library = _library ? new TipLibraryModel(_library) : null
        this._scriptDate = scriptDate
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get libraries() {
        return this._libraries
    }

    get librariesFilter() {
        return this._librariesFilter
    }

    get library() {
        return this._library
    }

    get libraryObj() {
        return this.__library
    }

    get scriptDate() {
        return this._scriptDate
    }

    filter(payload) {
        this._libraries = this.librariesFilter.filter(library => library.filter(payload))
    }

    getImage() {
        return this.library ? this.library.getImage() : null
    }

    toDTO() {
        const libraryDTO = this.library && this.library.toDTO()
        if (libraryDTO) {
            const {
                city: { _id: id, name, timezone }
            } = this.libraryObj && this.libraryObj.toDTO()
            libraryDTO.city = { id, name, timezone }
        }
        return {
            __v: this.v,
            _id: this.id,
            library: libraryDTO,
            scriptDate: this.scriptDate
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            library: this.library ? this.library.toForm() : null,
            scriptDate: this.scriptDate || null
        }
    }
}

export default TipServiceModel
