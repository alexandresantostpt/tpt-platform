import { actions } from '../constants'

describe('Tests for Consultants constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.CONSULTANT_GET_SINGLE).toEqual('CONSULTANT_GET_SINGLE')
        expect(actions.CONSULTANT_GET_LIST).toEqual('CONSULTANT_GET_LIST')
        expect(actions.CONSULTANT_REQUEST_GET_SINGLE).toEqual('CONSULTANT_REQUEST_GET_SINGLE')
        expect(actions.CONSULTANT_REQUEST_GET_LIST).toEqual('CONSULTANT_REQUEST_GET_LIST')
        expect(actions.CONSULTANT_REQUEST_RESET).toEqual('CONSULTANT_REQUEST_RESET')
        expect(actions.CONSULTANT_REQUEST_SAVE_DATA).toEqual('CONSULTANT_REQUEST_SAVE_DATA')
        expect(actions.CONSULTANT_REQUEST_SEARCH).toEqual('CONSULTANT_REQUEST_SEARCH')
        expect(actions.CONSULTANT_RESET).toEqual('CONSULTANT_RESET')
        expect(actions.CONSULTANT_SAVE_DATA).toEqual('CONSULTANT_SAVE_DATA')
        expect(actions.CONSULTANT_SEARCH).toEqual('CONSULTANT_SEARCH')
    })
})
