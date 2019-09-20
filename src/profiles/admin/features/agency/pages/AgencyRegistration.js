import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import App from '@containers/App'
import Container from '@containers/Container'
import Summary from '@containers/Summary'

import Avatar from '@/components/avatar/Avatar'
import FormBuilder from '@/components/form/FormBuilder'
import FormButtonContainer from '@/components/form/container/button/FormButtonContainer'
import Button from '@/components/button/Button'

import { colors } from '@helpers/colors'
import { getUser } from '@/utils/auth'

import { i18n } from '@i18n'

import AgencyModel from '../AgencyModel'
import { agencyCompleteFormFields } from '../fields'

import { routesRedefinePassword } from '@features/login/routes'
import { routes as routesTravel } from '@features/travel/routes'

import profileAvatar from '@img/avatars/persona1.png'
import UploadArea from '../components/UploadArea'
import ColorPicker from '../components/color-picker/ColorPicker'

import { appThemes } from '../appThemes'

const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const BodyContainer = styled.div`
    padding: 2.25rem;
`

const Title = styled.div`
    color: ${colors.text};
    font-size: 2.8125rem;
    font-weight: 300;
    margin: 2.8125rem 0;
`

const Text = styled(Title)`
    font-size: 1.5625rem;
`

const agencyInitialValues = agency => (agency ? agency.toForm() : {})

const AgencyRegistration = ({ agency, requestGetSingleAction, requestSaveDataAction }) => {
    const user = getUser()
    const form = useRef()
    const [image, updateImage] = useState(null)
    const [color, updateColor] = useState(null)

    useEffect(() => {
        const id = user.agency
        requestGetSingleAction({ id })
    }, [])

    const redirectTo = user && user.active ? routesTravel[0].path : routesRedefinePassword.path

    const callSaveData = values => {
        const agencyModelData = color ? { ...values, appTheme: color } : { ...values }
        requestSaveDataAction({ data: new AgencyModel(agencyModelData).toDTO(), image, redirectTo: redirectTo })
    }

    const onSaveClick = () => form.current.form.submit()

    const getImage = () => agency && agency.getImage()

    return (
        <App>
            <Container>
                <HeaderContainer>
                    <Avatar alt={user && user.name} image={(user && user.getImage()) || profileAvatar} size={10} />
                    <Title>{i18n.t('titles.greetings', { name: user && user.name })}</Title>
                </HeaderContainer>
                <BodyContainer>
                    <Text>{i18n.t('info.fillFields')}</Text>
                    <FormBuilder
                        fields={agencyCompleteFormFields}
                        fieldsToValidate={[...agencyCompleteFormFields]}
                        initialValues={agencyInitialValues(agency)}
                        onSubmit={callSaveData}
                        ref={process.env.__TEST__ ? null : form}
                    />
                    <UploadArea addImage={updateImage} image={getImage()} />
                    <ColorPicker
                        color={color || (agency && agency.appTheme)}
                        colorList={appThemes}
                        placeholder={i18n.t('placeholders.colors')}
                        updateColor={updateColor}
                    />
                    <FormButtonContainer>
                        <Button color={colors.purple} disabled={false} onClick={onSaveClick} text={i18n.t('buttons.save')} />
                    </FormButtonContainer>
                </BodyContainer>
            </Container>
            <Summary />
        </App>
    )
}

AgencyRegistration.defaultProps = {
    agency: null
}

AgencyRegistration.propTypes = {
    agency: PropTypes.objectOf(AgencyModel),
    requestGetSingleAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired
}

export default AgencyRegistration
