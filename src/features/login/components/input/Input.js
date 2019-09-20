import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { i18n } from '@i18n'

import If from '@components/if/If'

const StyledBox = styled.div`
    display: flex;
    font-size: 1.125rem;
    margin-bottom: 2rem;
    padding-top: 1.5rem;
    position: relative;
    width: 100%;

    *:focus {
        outline: none;
    }
`

const StyledButton = styled.button`
    background-color: white;
    border: none;
    bottom: 0.3125rem;
    color: ${colors.inputButtonGray};
    cursor: pointer;
    font-size: 75%;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    width: auto;
`

const StyledLabel = styled.label`
    color: ${colors.inputGray};
    cursor: text;
    position: absolute;
    text-transform: uppercase;
    top: 2rem;
    transition: all 200ms;
`

const StyledInput = styled.input`
    border: 0;
    border-bottom: 0.0875rem solid ${colors.inputGray};
    color: ${colors.text};
    font-size: 1.125rem;
    outline: 0;
    padding: 0.3125rem ${({ type }) => (type === 'password' ? '5rem' : '0')} 0.3125rem 0;
    width: 100%;

    &:focus + ${StyledLabel} {
        font-size: 75%;
        transform: translate3d(0, -150%, 0);
    }

    &:valid + ${StyledLabel} {
        font-size: 75%;
        transform: translate3d(0, -150%, 0);
    }
`

const Input = ({ id, onChange, placeholder, type }) => {
    const [text, updateText] = useState('mostrar')
    const [typeUsed, updateTypeUsed] = useState(type)

    const top = () => {
        if (typeUsed === 'text') {
            updateTypeUsed('password')
            updateText(i18n.t('buttons.show'))
        } else {
            updateTypeUsed('text')
            updateText(i18n.t('buttons.hide'))
        }
    }

    return (
        <StyledBox>
            <StyledInput id={id} onChange={({ target }) => onChange(target.value)} required type={typeUsed} />
            <StyledLabel htmlFor={id}> {placeholder} </StyledLabel>
            <If condition={type === 'password'}>
                <StyledButton onClick={() => top()} type="button">
                    {text}
                </StyledButton>
            </If>
        </StyledBox>
    )
}

Input.defaultProps = {
    placeholder: ''
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Input
