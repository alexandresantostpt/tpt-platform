import { actions } from '../constants'

describe('Tests for CarRental constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.CAR_RENTAL_DEL).toEqual('CAR_RENTAL_DEL')
        expect(actions.CAR_RENTAL_GET_SINGLE).toEqual('CAR_RENTAL_GET_SINGLE')
        expect(actions.CAR_RENTAL_REQUEST_DEL).toEqual('CAR_RENTAL_REQUEST_DEL')
        expect(actions.CAR_RENTAL_REQUEST_GET_SINGLE).toEqual('CAR_RENTAL_REQUEST_GET_SINGLE')
        expect(actions.CAR_RENTAL_REQUEST_SAVE_DATA).toEqual('CAR_RENTAL_REQUEST_SAVE_DATA')
        expect(actions.CAR_RENTAL_SAVE_DATA).toEqual('CAR_RENTAL_SAVE_DATA')
    })
})
