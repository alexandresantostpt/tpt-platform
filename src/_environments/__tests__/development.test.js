import { config } from '../development'

describe('Tests for development environment', () => {
    it('Should return default env configurations', () => {
        const { api, app } = config
        expect(api.url).toEqual('http://tpt-dev.dextra.tech:8080/v1/api')
        expect(app.environment).toEqual('development')
        expect(app.namespace).toEqual('tpt_platform')
    })
})
