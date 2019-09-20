import { mediaQueries } from '../mediaQueries'

describe('Tests for mediaQueries helper', () => {
    it('Should match each with your respective value', () => {
        expect(mediaQueries.desktop).toEqual('992px')
        expect(mediaQueries.mobile).toEqual('576px')
        expect(mediaQueries.screen).toEqual('1200px')
        expect(mediaQueries.tablet).toEqual('768px')
        expect(mediaQueries.tabletLandscape).toEqual('1024px')
    })
})
