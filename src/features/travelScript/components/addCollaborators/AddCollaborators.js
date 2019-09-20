import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { i18n } from '@i18n'

import InviteButton from '../inviteButton/InviteButton'
import Input from '../input/Input'
import { isNotEmpty } from '@/utils/functions'
import { keys } from '@/constants/keys'
import Avatars from './Avatars'
import UserModel from '@/features/login/UserModel'
import If from '@/components/if/If'

const AddCollaborators = ({ addCollaborator, collaborators, removeCollaborator }) => {
    const [shouldShowInput, updateShouldShowInput] = useState(false)
    const [email, updateEmail] = useState('')

    const AddCollaboratorsContainer = styled.div`
        align-items: flex-end;
        display: flex;
        flex-direction: ${isNotEmpty(collaborators) && shouldShowInput ? 'column' : 'row'};
    `

    const handleKeyPress = event => {
        if (isNotEmpty(email) && event.key === keys.ENTER) {
            updateShouldShowInput(false)
            addCollaborator(email)
            updateEmail('')
        }
    }

    const avatarClick = collaborator => {
        updateShouldShowInput(true)
        updateEmail(collaborator.email)
    }

    /* eslint-disable jsx-a11y/no-autofocus */
    return (
        <AddCollaboratorsContainer>
            <If condition={isNotEmpty(collaborators)}>
                <Avatars collaborators={collaborators} onClick={avatarClick} onRemove={removeCollaborator} />
            </If>
            <If
                condition={shouldShowInput}
                el={<InviteButton onClick={() => updateShouldShowInput(true)} round={isNotEmpty(collaborators)} />}
            >
                <Input
                    autoFocus
                    onBlur={() => updateShouldShowInput(false)}
                    onChange={({ target }) => updateEmail(target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={i18n.t('placeholders.shareTravelScript')}
                    value={email}
                />
            </If>
        </AddCollaboratorsContainer>
    )
}

AddCollaborators.defaultProps = {
    collaborators: []
}

AddCollaborators.propTypes = {
    addCollaborator: PropTypes.func.isRequired,
    collaborators: PropTypes.arrayOf(UserModel),
    removeCollaborator: PropTypes.func.isRequired
}

export default AddCollaborators
