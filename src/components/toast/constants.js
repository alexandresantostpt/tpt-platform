const CONTEXT_NAME = 'TOAST'

const actions = {
    TOAST_ADD: `${CONTEXT_NAME}_ADD`,
    TOAST_REMOVE: `${CONTEXT_NAME}_REMOVE`,
    TOAST_REQUEST_ADD: `${CONTEXT_NAME}_REQUEST_ADD`,
    TOAST_REQUEST_REMOVE: `${CONTEXT_NAME}_REQUEST_REMOVE`
}

const events = {
    TOAST_SHOW: `${CONTEXT_NAME}_SHOW`
}

const types = {
    error: 'error',
    success: 'success',
    warning: 'warning'
}

export { actions, events, types }
