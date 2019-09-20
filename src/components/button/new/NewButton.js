import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import { colors } from '@helpers/colors'
import Icon, { StyledIcon } from '@components/icon/Icon'

const transparentStyles = css`
    ${({ transparent }) => {
        if (transparent) {
            return `
                background:  ${colors.white};
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.38);
                opacity: 36%;`
        }

        return `
            background: linear-gradient(135deg,  ${({ theme }) => theme.primaryDark} 0%,  ${({ theme }) => theme.primaryLight} 100%);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            opacity: 100%;`
    }};
`

const StyledNewButton = styled.button`
    border: 0;
    border-radius: 100%;
    color: ${colors.white};
    cursor: pointer;
    height: 2.167rem;
    ${transparentStyles};
    text-align: left;
    width: 2.167rem;

    &:hover {
        cursor: pointer;
    }

    ${StyledIcon} {
        font-size: 1.875rem;
    }
`

const NewButton = ({ transparent }) => (
    <StyledNewButton transparent={transparent}>
        <Icon icon="plus" />
    </StyledNewButton>
)

NewButton.propTypes = {
    transparent: PropTypes.bool.isRequired
}

export default NewButton
