import { environments } from '../environments'

describe('Tests for environments constants', () => {
    it('Should match each constant with your respective value', () => {
        expect(environments.development).toEqual('development')
        expect(environments.homolog).toEqual('homolog')
        expect(environments.mock).toEqual('mock')
        expect(environments.prod).toEqual('prod')
        expect(environments.qa).toEqual('qa')
    })
})
