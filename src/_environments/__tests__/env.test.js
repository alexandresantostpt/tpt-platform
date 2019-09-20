import { config } from '../env'

describe('Tests for env environment', () => {
    it('Should return default env configurations', () => {
        const defaultEnv = config()
        const { api, app } = defaultEnv
        expect(api.url).toEqual('http://tpt-dev.dextra.tech:8080/v1/api')
        expect(app.environment).toBeNull()
        expect(app.namespace).toEqual('tpt_platform')
    })
})
