import { actions } from '../constants'

describe('Tests for Tour constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TOUR_DEL).toEqual('TOUR_DEL')
        expect(actions.TOUR_GET_SINGLE).toEqual('TOUR_GET_SINGLE')
        expect(actions.TOUR_REQUEST_DEL).toEqual('TOUR_REQUEST_DEL')
        expect(actions.TOUR_REQUEST_GET_SINGLE).toEqual('TOUR_REQUEST_GET_SINGLE')
        expect(actions.TOUR_REQUEST_SAVE_DATA).toEqual('TOUR_REQUEST_SAVE_DATA')
        expect(actions.TOUR_SAVE_DATA).toEqual('TOUR_SAVE_DATA')
    })
})
