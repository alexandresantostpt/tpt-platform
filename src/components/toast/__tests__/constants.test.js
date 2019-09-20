import { actions, events, types } from '../constants'

describe('Tests for Toat constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TOAST_ADD).toEqual('TOAST_ADD')
        expect(actions.TOAST_REMOVE).toEqual('TOAST_REMOVE')
        expect(actions.TOAST_REQUEST_ADD).toEqual('TOAST_REQUEST_ADD')
        expect(actions.TOAST_REQUEST_REMOVE).toEqual('TOAST_REQUEST_REMOVE')

        expect(events.TOAST_SHOW).toEqual('TOAST_SHOW')

        expect(types.error).toEqual('error')
        expect(types.success).toEqual('success')
        expect(types.warning).toEqual('warning')
    })
})
