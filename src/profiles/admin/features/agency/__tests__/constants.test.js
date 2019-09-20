import { actions } from '../constants'

describe('Tests for Agency constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.AGENCY_GET_SINGLE).toEqual('AGENCY_GET_SINGLE')
        expect(actions.AGENCY_GET_LIST).toEqual('AGENCY_GET_LIST')
        expect(actions.AGENCY_REQUEST_GET_SINGLE).toEqual('AGENCY_REQUEST_GET_SINGLE')
        expect(actions.AGENCY_REQUEST_GET_LIST).toEqual('AGENCY_REQUEST_GET_LIST')
        expect(actions.AGENCY_REQUEST_RESET).toEqual('AGENCY_REQUEST_RESET')
        expect(actions.AGENCY_REQUEST_SAVE_DATA).toEqual('AGENCY_REQUEST_SAVE_DATA')
        expect(actions.AGENCY_REQUEST_SEARCH).toEqual('AGENCY_REQUEST_SEARCH')
        expect(actions.AGENCY_RESET).toEqual('AGENCY_RESET')
        expect(actions.AGENCY_SAVE_DATA).toEqual('AGENCY_SAVE_DATA')
        expect(actions.AGENCY_SEARCH).toEqual('AGENCY_SEARCH')
    })
})
