import { environments } from '@constants/environments'

import { config as envConfig } from './env'

import { deepFreeze } from '@utils/object'

const config = { ...envConfig() }

config.app.environment = environments.production
config.api.url = 'https://api.exploreitapp.com.br/v1/api'

deepFreeze(config)

export { config }
