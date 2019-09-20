import { device } from '../device'

describe('Tests for device constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(device.app).toEqual('app')
        expect(device.platform).toEqual('platform')
    })
})
