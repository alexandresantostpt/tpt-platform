import { deepFreeze } from '@utils/object'

const config = () => ({
    api: {
        url: 'http://tpt-dev.dextra.tech:8080/v1/api'
    },
    app: {
        deepLink: {
            android: 'tptb2b://tptb2b',
            ios: 'tptb2b:/'
        },
        environment: null,
        namespace: 'tpt_platform'
    }
})

deepFreeze(config)

export { config }
