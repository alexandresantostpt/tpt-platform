import { inputTypes } from '../inputTypes'

describe('Tests for input types constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(inputTypes.HIDDEN).toEqual('hidden')
    })
})
