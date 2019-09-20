import { actions } from '../constants'

describe('Tests for Clients constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.CLIENT_GET_SINGLE).toEqual('CLIENT_GET_SINGLE')
        expect(actions.CLIENT_GET_LIST).toEqual('CLIENT_GET_LIST')
        expect(actions.CLIENT_REQUEST_GET_SINGLE).toEqual('CLIENT_REQUEST_GET_SINGLE')
        expect(actions.CLIENT_REQUEST_GET_LIST).toEqual('CLIENT_REQUEST_GET_LIST')
        expect(actions.CLIENT_REQUEST_RESET).toEqual('CLIENT_REQUEST_RESET')
        expect(actions.CLIENT_REQUEST_SAVE_DATA).toEqual('CLIENT_REQUEST_SAVE_DATA')
        expect(actions.CLIENT_REQUEST_SEARCH).toEqual('CLIENT_REQUEST_SEARCH')
        expect(actions.CLIENT_RESET).toEqual('CLIENT_RESET')
        expect(actions.CLIENT_SAVE_DATA).toEqual('CLIENT_SAVE_DATA')
        expect(actions.CLIENT_SEARCH).toEqual('CLIENT_SEARCH')
    })
})
