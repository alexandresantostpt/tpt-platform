import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import Platform from 'react-platform-js'

import { config } from '@config'

import { i18n } from '@i18n'

import { getQueryParams } from '@utils/browser'
import { isValid } from '@utils/validateToken'
import { logout } from '@utils/auth'

import Form from '../components/form/Form'
import Button from '../components/button/Button'
import ErrorMessage from '../components/errorMessage/ErrorMessage'
import If from '@components/if/If'
import Input from '../components/input/Input'
import LinkTo from '../components/link/LinkTo'
import LoginComponent from '../components/login/Login'
import Text from '../components/text/Text'

import { routesLogin } from '../routes'

const ResetPassword = props => {
    const [password, updatePassword] = useState('')
    const [confirmPassword, updateConfirmPassword] = useState('')
    const [notEqual, updateNotEqual] = useState(false)
    const { hash, from } = getQueryParams()
    const valid = isValid(hash)
    const resetPassword = '/reset/password'

    useEffect(() => {
        logout()
        if (isMobile) {
            let path = null
            if (Platform.OS === 'Android') {
                path = `${config.app.deepLink.android}${resetPassword}`
            }
            if (Platform.OS === 'iOS') {
                path = `${config.app.deepLink.ios}${resetPassword}`
            }
            path && window.location.replace(path)
        }
    }, [])

    const saveButtonClicked = event => {
        event.preventDefault()
        const { requestResetPasswordAction } = props

        if (password && confirmPassword) {
            if (password === confirmPassword) {
                updateNotEqual(false)
                requestResetPasswordAction({ confirmPassword, from, hash, password })
            } else {
                updateNotEqual(true)
            }
        }
    }

    return (
        <LoginComponent>
            <If
                condition={valid}
                el={
                    <>
                        <Text>
                            <div>{i18n.t('titles.tokenExpired')}</div>
                        </Text>
                        <Form>
                            <LinkTo text={i18n.t('link.return')} to={routesLogin.path} />
                        </Form>
                    </>
                }
            >
                <Text>
                    <div>{i18n.t('titles.welcome')}</div>
                    <div>{i18n.t('titles.chooseANewPassword')}</div>
                </Text>
                <Form onSubmit={saveButtonClicked}>
                    <ErrorMessage>{notEqual ? i18n.t('messages.errors.invalidConfirmation') : ''}</ErrorMessage>
                    <Input id={'password'} onChange={updatePassword} placeholder={i18n.t('placeholders.password')} type="password" />
                    <Input
                        id={'confirmPassword'}
                        onChange={updateConfirmPassword}
                        placeholder={i18n.t('placeholders.confirmYourPassword')}
                        type="password"
                    />
                    <Button disabled={false} text={i18n.t('buttons.save')} type="submit" />
                </Form>
            </If>
        </LoginComponent>
    )
}

ResetPassword.propTypes = {
    requestResetPasswordAction: PropTypes.func.isRequired
}

export default ResetPassword
