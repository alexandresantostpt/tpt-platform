import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { zIndexes } from '@helpers/zIndexes'

import Avatar from '@components/avatar/Avatar'

import UserModel from '@/features/login/UserModel'

const ICON_SIZE = '20px'

const AvatarsButton = styled.button`
    background: #e18187;
    border: none;
    border-radius: 100%;
    bottom: -5px;
    color: #ffffff;
    height: ${ICON_SIZE};
    opacity: 0;
    position: absolute;
    right: -5px;
    transition: all 0.125s ease-in-out;
    width: ${ICON_SIZE};
    z-index: ${zIndexes.removeConsultant};

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`

const AvatarsIcon = styled.span`
    display: block;
    margin-left: -1px;
    margin-top: -2px;
    &::before {
        content: 'x';
    }
`

const AvatarsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const AvaatarsWrap = styled.div`
    position: relative;

    &:hover {
        ${AvatarsButton} {
            opacity: 1;
        }
    }
`

const Avatars = ({ collaborators, onClick, onRemove }) => (
    <AvatarsContainer>
        {collaborators.map(collaborator => (
            <AvaatarsWrap key={collaborator.email}>
                <Avatar alt={collaborator.name} image={collaborator.getImage()} onClick={() => onClick(collaborator)} />
                <AvatarsButton onClick={() => onRemove(collaborator)}>
                    <AvatarsIcon />
                </AvatarsButton>
            </AvaatarsWrap>
        ))}
    </AvatarsContainer>
)

Avatars.propTypes = {
    collaborators: PropTypes.arrayOf(UserModel).isRequired,
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Avatars
