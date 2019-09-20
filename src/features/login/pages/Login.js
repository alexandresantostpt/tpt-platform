import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { i18n } from '@i18n'

import Form from '../components/form/Form'
import Button from '../components/button/Button'
import Text from '../components/text/Text'
import Input from '../components/input/Input'
import ErrorMessage from '../components/errorMessage/ErrorMessage'
import LinkTo from '../components/link/LinkTo'
import LoginComponent from '../components/login/Login'

import { routesForgotPassword } from '../routes'

const Login = props => {
    const { wrongCredentials } = props

    const [login, updateLogin] = useState('')
    const [password, updatePassword] = useState('')

    const loginButtonClicked = event => {
        event.preventDefault()
        const { requestAuthAction } = props

        if (login && password) {
            requestAuthAction({
                password: password,
                user: login
            })
        }
    }

    return (
        <LoginComponent>
            <Text>
                <div>{i18n.t('titles.welcome')}</div>
                <div>{i18n.t('titles.signInToContinue')}</div>
            </Text>
            <Form onSubmit={loginButtonClicked}>
                <ErrorMessage>{wrongCredentials ? i18n.t('messages.errors.auth') : ''}</ErrorMessage>
                <Input id={'login'} onChange={updateLogin} placeholder={i18n.t('placeholders.login')} type="text" />
                <Input id={'password'} onChange={updatePassword} placeholder={i18n.t('placeholders.password')} type="password" />
                <Button disabled={false} text={i18n.t('buttons.login')} type="submit" />
                <LinkTo text={i18n.t('link.forgotPassword')} to={routesForgotPassword.path} />
            </Form>
        </LoginComponent>
    )
}

Login.propTypes = {
    requestAuthAction: PropTypes.func.isRequired,
    wrongCredentials: PropTypes.bool.isRequired
}

export default Login
