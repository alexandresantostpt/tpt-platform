import { times } from '../times'

describe('Tests for times constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(times.FIVE_SECONDS).toEqual(5000)
        expect(times.HALF_SECOND).toEqual(500)
        expect(times.ONE_MINUTE).toEqual(60000)
        expect(times.ONE_SECOND).toEqual(1000)
        expect(times.THIRD_MINUTRES).toEqual(300000)
    })
})
