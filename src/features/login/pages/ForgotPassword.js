import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { i18n } from '@i18n'

import Form from '../components/form/Form'
import Button from '../components/button/Button'
import ErrorMessage from '../components/errorMessage/ErrorMessage'
import Input from '../components/input/Input'
import LinkTo from '../components/link/LinkTo'
import LoginComponent from '../components/login/Login'
import Text from '../components/text/Text'

import { routesLogin } from '../routes'

const ForgotPassword = props => {
    const [email, updateEmail] = useState('')
    const [notEqual, updateNotEqual] = useState(false)

    const sendButtonClicked = event => {
        event.preventDefault()
        const { requestRememberPasswordAction } = props

        if (email !== '') {
            updateNotEqual(false)
            requestRememberPasswordAction({ email })
        } else {
            updateNotEqual(true)
        }
    }

    return (
        <LoginComponent>
            <Text>
                <div>{i18n.t('titles.welcome')}</div>
                <div>{i18n.t('titles.typeYourEmail')}</div>
            </Text>
            <Form onSubmit={sendButtonClicked}>
                <ErrorMessage>{notEqual ? i18n.t('messages.errors.typeTheEmail') : ''}</ErrorMessage>
                <Input id={'email'} onChange={updateEmail} placeholder={i18n.t('placeholders.email')} type="text" />
                <Button disabled={false} text={i18n.t('buttons.send')} type="submit" />
                <LinkTo text={i18n.t('link.cancel')} to={routesLogin.path} />
            </Form>
        </LoginComponent>
    )
}

ForgotPassword.propTypes = {
    requestRememberPasswordAction: PropTypes.func.isRequired
}

export default ForgotPassword
