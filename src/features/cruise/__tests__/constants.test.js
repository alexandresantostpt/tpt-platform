import { actions } from '../constants'

describe('Tests for Cruise constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.CRUISE_DEL).toEqual('CRUISE_DEL')
        expect(actions.CRUISE_GET_SINGLE).toEqual('CRUISE_GET_SINGLE')
        expect(actions.CRUISE_REQUEST_DEL).toEqual('CRUISE_REQUEST_DEL')
        expect(actions.CRUISE_REQUEST_GET_SINGLE).toEqual('CRUISE_REQUEST_GET_SINGLE')
        expect(actions.CRUISE_REQUEST_SAVE_DATA).toEqual('CRUISE_REQUEST_SAVE_DATA')
        expect(actions.CRUISE_SAVE_DATA).toEqual('CRUISE_SAVE_DATA')
    })
})
