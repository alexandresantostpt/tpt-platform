import React from 'react'

import { connect } from 'react-redux'

import { requestAuthAction } from '../actions'

import GlobalStyle from '@components/globalStyle/GlobalStyle'
import Toasts from '@components/toast/Toasts'

import Login from '../pages/Login'

import { getUserSelector, getWrongCredentialsSelector } from '../selectors'

const LoginContainer = props => (
    <>
        <GlobalStyle />
        <Toasts />
        <Login {...props} />
    </>
)

const mapStateToProps = state => ({
    user: getUserSelector(state),
    wrongCredentials: getWrongCredentialsSelector(state)
})

const mapDispatchToProps = {
    requestAuthAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)
