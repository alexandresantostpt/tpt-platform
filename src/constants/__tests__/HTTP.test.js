import { CODES } from '../HTTP'

describe('Tests for HTTP codes constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(CODES.OK).toEqual(200)
    })
})
