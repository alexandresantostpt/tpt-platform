import { environments } from '@constants/environments'

import { config as envConfig } from './env'

import { deepFreeze } from '@utils/object'

const config = { ...envConfig() }

config.app.environment = environments.homolog
config.api.url = 'http://tpt-homolog.dextra.tech:8080/v1/api'

deepFreeze(config)

export { config }
