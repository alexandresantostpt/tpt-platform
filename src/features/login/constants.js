const CONTEXT_NAME = 'LOGIN'

const actions = {
    LOGIN_AUTH: `${CONTEXT_NAME}_AUTH`,
    LOGIN_LOGOUT: `${CONTEXT_NAME}_LOGOUT`,
    LOGIN_REMEMBER_PASSWORD: `${CONTEXT_NAME}_REMEMBER_PASSWORD`,
    LOGIN_REQUEST_AUTH: `${CONTEXT_NAME}_REQUEST_AUTH`,
    LOGIN_REQUEST_LOGOUT: `${CONTEXT_NAME}_REQUEST_LOGOUT`,
    LOGIN_REQUEST_REMEMBER_PASSWORD: `${CONTEXT_NAME}_REQUEST_REMEMBER_PASSWORD`,
    LOGIN_REQUEST_RESET_PASSWORD: `${CONTEXT_NAME}_REQUEST_RESET_PASSWORD`,
    LOGIN_REQUEST_UPDATE_PASSWORD: `${CONTEXT_NAME}_REQUEST_UPDATE_PASSWORD`,
    LOGIN_RESET_PASSWORD: `${CONTEXT_NAME}_RESET_PASSWORD`,
    LOGIN_UPDATE_PASSWORD: `${CONTEXT_NAME}_UPDATE_PASSWORD`
}

export { actions }
