import { actions } from '../constants'

describe('Tests for Travel constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TRAVEL_DEL).toEqual('TRAVEL_DEL')
        expect(actions.TRAVEL_EDIT).toEqual('TRAVEL_EDIT')
        expect(actions.TRAVEL_GET_ARCHIVEDS).toEqual('TRAVEL_GET_ARCHIVEDS')
        expect(actions.TRAVEL_GET_LIST).toEqual('TRAVEL_GET_LIST')
        expect(actions.TRAVEL_REQUEST_DEL).toEqual('TRAVEL_REQUEST_DEL')
        expect(actions.TRAVEL_REQUEST_EDIT).toEqual('TRAVEL_REQUEST_EDIT')
        expect(actions.TRAVEL_REQUEST_RESET).toEqual('TRAVEL_REQUEST_RESET')
        expect(actions.TRAVEL_REQUEST_GET_ARCHIVEDS).toEqual('TRAVEL_REQUEST_GET_ARCHIVEDS')
        expect(actions.TRAVEL_REQUEST_GET_LIST).toEqual('TRAVEL_REQUEST_GET_LIST')
        expect(actions.TRAVEL_REQUEST_SAVE_DATA).toEqual('TRAVEL_REQUEST_SAVE_DATA')
        expect(actions.TRAVEL_REQUEST_SEARCH).toEqual('TRAVEL_REQUEST_SEARCH')
        expect(actions.TRAVEL_REQUEST_SEARCH_CITY_OUR_API).toEqual('TRAVEL_REQUEST_SEARCH_CITY_OUR_API')
        expect(actions.TRAVEL_REQUEST_SEARCH_CLIENTS).toEqual('TRAVEL_REQUEST_SEARCH_CLIENTS')
        expect(actions.TRAVEL_RESET).toEqual('TRAVEL_RESET')
        expect(actions.TRAVEL_SAVE_DATA).toEqual('TRAVEL_SAVE_DATA')
        expect(actions.TRAVEL_SEARCH).toEqual('TRAVEL_SEARCH')
        expect(actions.TRAVEL_SEARCH_CITY_OUR_API).toEqual('TRAVEL_SEARCH_CITY_OUR_API')
        expect(actions.TRAVEL_SEARCH_CLIENTS).toEqual('TRAVEL_SEARCH_CLIENTS')
    })
})
