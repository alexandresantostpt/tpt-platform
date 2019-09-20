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
    padding: 0.25rem 1rem;
    white-space: nowrap;

    input {
        cursor: pointer;
        margin-right: 0.2rem;
    }

    &:hover {
        background: ${({ theme }) => theme.primaryDark};
        color: ${colors.white};
        cursor: pointer;
    }
`

const SelectItem = ({ category, data, onClick, selected }) => (
    <StyledSelectItem onClick={() => onClick(data, category)}>
        <input checked={selected} readOnly type="checkbox" />
        {category.describe}
    </StyledSelectItem>
)

SelectItem.defaultProps = {
    selected: false
}

SelectItem.propTypes = {
    category: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool
}

export default SelectItem
