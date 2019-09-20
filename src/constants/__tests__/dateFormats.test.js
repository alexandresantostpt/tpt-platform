import { formats } from '../dateFormats'

describe('Tests for date formats constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(formats.american).toEqual('YYYY-MM-DD')
        expect(formats.americanFull).toEqual('YYYY-MM-DD HH:mm:ss')
        expect(formats.short).toEqual('DD MMM YYYY')
    })
})
