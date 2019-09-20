import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledButton = styled.button`
    background: ${({ fill, theme }) => (fill ? theme.primaryDark : colors.white)};
    border: 1px solid ${({ theme, disabled }) => (disabled ? colors.lightBlueGray : theme.primaryDark)};
    border-radius: 24px;
    color: ${({ theme, disabled, fill }) => {
        if (fill) {
            return colors.white
        }
        return disabled ? colors.lightBlueGray : theme.primaryDark
    }};
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
    height: 2.3rem;
    justify-content: center;
    padding: 0.6875rem 1rem;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;

    &:focus {
        outline: none;
    }

    &:hover {
        background: ${({ theme, disabled }) => !disabled && theme.primaryDark};
        border: ${({ disabled }) => !disabled && `1px solid ${colors.white}`};
        color: ${({ disabled }) => !disabled && colors.white};
    }
`

const Button = ({ disabled, fill, onClick, text }) => (
    <StyledButton disabled={disabled} fill={fill} onClick={onClick}>
        {text}
    </StyledButton>
)

Button.defaultProps = {
    disabled: false,
    fill: false
}

Button.propTypes = {
    disabled: PropTypes.bool,
    fill: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
