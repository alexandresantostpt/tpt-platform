import { zIndexes } from '../zIndexes'

describe('Tests for zIndexes helper', () => {
    it('Should match each with your respective value', () => {
        expect(zIndexes.formError).toEqual(1001)
        expect(zIndexes.toast).toEqual(1050)
    })
})
