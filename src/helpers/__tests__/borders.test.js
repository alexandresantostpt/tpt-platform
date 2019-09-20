import { borders } from '../borders'

describe('Tests for borders helper', () => {
    it('Should match each with your respective value', () => {
        expect(borders.default).toEqual('1px solid #dcdcdc')
    })
})
