import { connect } from 'react-redux'

import React from 'react'

import { requestRememberPasswordAction } from '@features/login/actions'

import GlobalStyle from '@components/globalStyle/GlobalStyle'
import Toasts from '@components/toast/Toasts'

import ForgotPassword from '../pages/ForgotPassword'

const ForgotPasswordContainer = props => (
    <>
        <GlobalStyle />
        <Toasts />
        <ForgotPassword {...props} />
    </>
)

const mapDispatchToProps = {
    requestRememberPasswordAction
}

export default connect(
    null,
    mapDispatchToProps
)(ForgotPasswordContainer)
