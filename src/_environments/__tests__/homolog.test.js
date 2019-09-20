import { config } from '../homolog'

describe('Tests for homolog environment', () => {
    it('Should return default env configurations', () => {
        const { api, app } = config
        expect(api.url).toEqual('http://tpt-homolog.dextra.tech:8080/v1/api')
        expect(app.environment).toEqual('homolog')
        expect(app.namespace).toEqual('tpt_platform')
    })
})
