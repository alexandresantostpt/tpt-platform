import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import Icon from '@/components/icon/Icon'

const InputColor = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    color: ${colors.text};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
    padding: 5px;
    transition: all 0.15s linear;
    width: calc(100% - 0.625rem);

    &:focus {
        outline: none;
    }
`

const InputDropdown = props => (
    <>
        <InputColor {...props} readOnly />
        <Icon icon={`arrow-${props.optionsOpen ? 'up' : 'down'}`} onClick={props.onClick} />
    </>
)

export default InputDropdown
