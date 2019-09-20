import { events } from '../events'

describe('Tests for events constants ', () => {
    it('Should match each constant with your respective value', () => {
        expect(events.FORM_RESET).toEqual('FORM_RESET')
    })
})
