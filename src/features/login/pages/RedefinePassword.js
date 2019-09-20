import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { i18n } from '@i18n'

import { isNull } from 'lodash'

import Form from '@features/login/components/form/Form'
import Button from '@features/login/components/button/Button'
import ErrorMessage from '@features/login/components/errorMessage/ErrorMessage'
import If from '@components/if/If'
import Input from '../components/input/Input'
import Link from '../components/link/LinkTo'
import LoginComponent from '@features/login/components/login/Login'
import Text from '@features/login/components/text/Text'

import { getUser, isActive } from '@utils/auth'
import { routes as travelRoutes } from '@features/travel/routes'
import { routesLogin } from '@features/login/routes'
import { navigateTo } from '@utils/browser'
import { not } from '@utils/functions'

const RedefinePassword = props => {
    const [oldPassword, updateOldPassword] = useState(null)
    const [password, updatePassword] = useState('')
    const [confirmPassword, updateConfirmPassword] = useState('')
    const [notEqual, updateNotEqual] = useState(false)
    const user = getUser()
    const active = isActive()
    const loginButtonClicked = event => {
        event.preventDefault()
        const { requestUpdatePasswordAction } = props

        if (isNull(user) || isNull(active)) {
            navigateTo(routesLogin.path)
        }

        if (confirmPassword && password) {
            if (confirmPassword === password) {
                updateNotEqual(false)
                let response = null
                let insidePlatform = false
                if (active && oldPassword) {
                    response = oldPassword
                    insidePlatform = true
                }
                if (not(active)) {
                    response = user.cpf.replace(/([.-])/g, '')
                }
                if (response) {
                    requestUpdatePasswordAction({
                        _id: user.id,
                        insidePlatform,
                        newPassword: confirmPassword,
                        oldPassword: response
                    })
                }
            } else {
                updateNotEqual(true)
            }
        }
    }

    return (
        <LoginComponent>
            <Text>
                <If condition={not(user)}>
                    <div>{i18n.t('titles.welcome')}</div>
                </If>
                <div>{i18n.t('titles.chooseANewPassword')}</div>
            </Text>
            <Form onSubmit={loginButtonClicked}>
                <ErrorMessage>{notEqual ? i18n.t('messages.errors.invalidConfirmation') : ''}</ErrorMessage>
                <If condition={active}>
                    <Input
                        id={'oldPassword'}
                        onChange={updateOldPassword}
                        placeholder={i18n.t('placeholders.oldPassword')}
                        type="password"
                    />
                </If>
                <Input id={'password'} onChange={updatePassword} placeholder={i18n.t('placeholders.password')} type="password" />
                <Input
                    id={'confirmPassword'}
                    onChange={updateConfirmPassword}
                    placeholder={i18n.t('placeholders.confirmYourPassword')}
                    type="password"
                />
                <Button disabled={false} text={i18n.t('buttons.save')} type="submit" />
                <If condition={active}>
                    <Link text={i18n.t('link.cancel')} to={travelRoutes[0].path} />
                </If>
            </Form>
        </LoginComponent>
    )
}

RedefinePassword.propTypes = {
    requestUpdatePasswordAction: PropTypes.func.isRequired
}

export default RedefinePassword
