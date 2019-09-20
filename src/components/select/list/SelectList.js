import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import SelectItem from '../item/SelectItem'

const StyledSelectList = styled.ul`
    background: ${colors.white};
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.18);
    color: ${({ theme }) => theme.text};
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    padding: 0.5rem;
    position: absolute;
    right: 0;
    z-index: ${({ expanded }) => (expanded ? 1052 : -1)};
`

const SelectDropdown = props => {
    const { expanded, onSelect, options } = props

    return (
        <StyledSelectList expanded={expanded}>
            {options.map((option, index) => (
                <SelectItem key={index} onClick={onSelect} option={option} />
            ))}
        </StyledSelectList>
    )
}

SelectDropdown.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SelectDropdown
