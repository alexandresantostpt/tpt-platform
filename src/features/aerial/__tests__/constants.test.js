import { actions } from '../constants'

describe('Tests for Aerial constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.AERIAL_DEL).toEqual('AERIAL_DEL')
        expect(actions.AERIAL_GET_SINGLE).toEqual('AERIAL_GET_SINGLE')
        expect(actions.AERIAL_REQUEST_DEL).toEqual('AERIAL_REQUEST_DEL')
        expect(actions.AERIAL_REQUEST_GET_SINGLE).toEqual('AERIAL_REQUEST_GET_SINGLE')
        expect(actions.AERIAL_REQUEST_SAVE_DATA).toEqual('AERIAL_REQUEST_SAVE_DATA')
        expect(actions.AERIAL_SAVE_DATA).toEqual('AERIAL_SAVE_DATA')
    })
})
