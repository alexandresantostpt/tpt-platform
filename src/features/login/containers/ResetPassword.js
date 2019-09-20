import { connect } from 'react-redux'

import React from 'react'

import { requestResetPasswordAction } from '@features/login/actions'

import GlobalStyle from '@components/globalStyle/GlobalStyle'
import Toasts from '@components/toast/Toasts'

import ResetPassword from '../pages/ResetPassword'

const ResetPasswordContainer = props => (
    <>
        <GlobalStyle />
        <Toasts />
        <ResetPassword {...props} />
    </>
)

const mapDispatchToProps = {
    requestResetPasswordAction
}

export default connect(
    null,
    mapDispatchToProps
)(ResetPasswordContainer)
