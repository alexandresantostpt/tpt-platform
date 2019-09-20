import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledSelectItem = styled.li`
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    font-size: 0.95rem;
    font-weight: 300;
    list-style: none;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;

    &:hover {
        background: ${({ theme }) => theme.primaryDark};
        color: ${colors.white};
        cursor: pointer;
    }
`

const SelectItem = ({ onClick, option }) => <StyledSelectItem onClick={() => onClick(option)}>{option.text}</StyledSelectItem>

SelectItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    option: PropTypes.object.isRequired
}

export default SelectItem
