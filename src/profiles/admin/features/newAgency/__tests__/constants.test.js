import { actions } from '../constants'

describe('Tests for New Agency constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.NEW_AGENCY_GET_SINGLE).toEqual('NEW_AGENCY_GET_SINGLE')
        expect(actions.NEW_AGENCY_GET_LIST).toEqual('NEW_AGENCY_GET_LIST')
        expect(actions.NEW_AGENCY_REQUEST_GET_SINGLE).toEqual('NEW_AGENCY_REQUEST_GET_SINGLE')
        expect(actions.NEW_AGENCY_REQUEST_GET_LIST).toEqual('NEW_AGENCY_REQUEST_GET_LIST')
        expect(actions.NEW_AGENCY_REQUEST_RESET).toEqual('NEW_AGENCY_REQUEST_RESET')
        expect(actions.NEW_AGENCY_REQUEST_SAVE_DATA).toEqual('NEW_AGENCY_REQUEST_SAVE_DATA')
        expect(actions.NEW_AGENCY_REQUEST_SEARCH).toEqual('NEW_AGENCY_REQUEST_SEARCH')
        expect(actions.NEW_AGENCY_RESET).toEqual('NEW_AGENCY_RESET')
        expect(actions.NEW_AGENCY_SAVE_DATA).toEqual('NEW_AGENCY_SAVE_DATA')
        expect(actions.NEW_AGENCY_SEARCH).toEqual('NEW_AGENCY_SEARCH')
    })
})
