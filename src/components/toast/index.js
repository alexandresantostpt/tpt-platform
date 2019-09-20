import { events, types } from './constants'

import PubSub from 'pubsub-js'
import uuid from 'uuid'

const error = options => {
    const newOptions = {
        ...options,
        icon: '',
        id: uuid(),
        type: types.error
    }
    PubSub.publish(events.TOAST_SHOW, newOptions)
}

const success = options => {
    const newOptions = {
        ...options,
        icon: '',
        id: uuid(),
        type: types.success
    }
    PubSub.publish(events.TOAST_SHOW, newOptions)
}

const warning = options => {
    const newOptions = {
        ...options,
        icon: '',
        id: uuid(),
        type: types.warning
    }
    PubSub.publish(events.TOAST_SHOW, newOptions)
}

export default { error, success, warning }
