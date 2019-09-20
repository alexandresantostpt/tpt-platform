import { actions } from '../constants'

describe('Tests for TravelScript constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TRAVEL_SCRIPT_CLOSE_MATERIAL).toEqual('TRAVEL_SCRIPT_CLOSE_MATERIAL')
        expect(actions.TRAVEL_SCRIPT_GET_SINGLE).toEqual('TRAVEL_SCRIPT_GET_SINGLE')
        expect(actions.TRAVEL_SCRIPT_REQUEST_CLOSE_MATERIAL).toEqual('TRAVEL_SCRIPT_REQUEST_CLOSE_MATERIAL')
        expect(actions.TRAVEL_SCRIPT_REQUEST_DEL_SERVICE).toEqual('TRAVEL_SCRIPT_REQUEST_DEL_SERVICE')
        expect(actions.TRAVEL_SCRIPT_REQUEST_GET_SINGLE).toEqual('TRAVEL_SCRIPT_REQUEST_GET_SINGLE')
        expect(actions.TRAVEL_SCRIPT_REQUEST_SHARE).toEqual('TRAVEL_SCRIPT_REQUEST_SHARE')
        expect(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_CITY).toEqual('TRAVEL_SCRIPT_REQUEST_UPDATE_CITY')
        expect(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_MATERIAL).toEqual('TRAVEL_SCRIPT_REQUEST_UPDATE_MATERIAL')
        expect(actions.TRAVEL_SCRIPT_SHARE).toEqual('TRAVEL_SCRIPT_SHARE')
        expect(actions.TRAVEL_SCRIPT_UPDATE_CITY).toEqual('TRAVEL_SCRIPT_UPDATE_CITY')
        expect(actions.TRAVEL_SCRIPT_UPDATE_MATERIAL).toEqual('TRAVEL_SCRIPT_UPDATE_MATERIAL')
    })
})
