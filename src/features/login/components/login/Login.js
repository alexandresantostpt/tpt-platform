import PropTypes from 'prop-types'
import React from 'react'

import Background from '../background/Background'
import Box from '../box/Box'
import Page from '../page/Page'

const Login = ({ children }) => (
    <Page>
        <Background />
        <Box>{children}</Box>
    </Page>
)

Login.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Login
