import { actions } from '../constants'

describe('Tests for Hotel constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.HOTEL_DEL).toEqual('HOTEL_DEL')
        expect(actions.HOTEL_GET_SINGLE).toEqual('HOTEL_GET_SINGLE')
        expect(actions.HOTEL_REQUEST_DEL).toEqual('HOTEL_REQUEST_DEL')
        expect(actions.HOTEL_REQUEST_GET_SINGLE).toEqual('HOTEL_REQUEST_GET_SINGLE')
        expect(actions.HOTEL_REQUEST_SAVE_DATA).toEqual('HOTEL_REQUEST_SAVE_DATA')
        expect(actions.HOTEL_SAVE_DATA).toEqual('HOTEL_SAVE_DATA')
    })
})
