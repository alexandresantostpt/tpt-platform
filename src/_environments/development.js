import { environments } from '@constants/environments'

import { config as envConfig } from './env'

import { deepFreeze } from '@utils/object'

const config = { ...envConfig() }

config.app.environment = environments.development

deepFreeze(config)

export { config }
