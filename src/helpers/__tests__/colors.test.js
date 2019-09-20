import { colors } from '../colors'

describe('Tests for colors helper', () => {
    it('Should match each with your respective value', () => {
        expect(colors.lightBlueGray).toEqual('#cbcbcd')
        expect(colors.lightGray).toEqual('#ecedf0')
        expect(colors.lightPurple).toEqual('#bf9ffd')
        expect(colors.primary).toEqual('#9390ec')
        expect(colors.purple).toEqual('#8187e1')
        expect(colors.text).toEqual('#3d3e46')
        expect(colors.title).toEqual('#050505')
        expect(colors.white).toEqual('#ffffff')
    })
})
