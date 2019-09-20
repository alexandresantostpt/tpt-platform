class CarModel {
    constructor({ board, model }) {
        this._board = board
        this._model = model
    }

    get board() {
        return this._board
    }

    get model() {
        return this._model
    }

    toDTO() {
        return {
            board: this.board || null,
            model: this.model || null
        }
    }
}

export default CarModel
