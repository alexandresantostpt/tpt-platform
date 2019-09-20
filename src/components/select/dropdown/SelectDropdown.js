import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSelectDropdown = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 0.875rem;
    height: 25px;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

const SelectDropdown = props => {
    const { expanded, onClick } = props

    return (
        <>
            <StyledSelectDropdown className={expanded ? 'is-expanded' : null} expanded={expanded} onClick={onClick} type="button" />
        </>
    )
}

SelectDropdown.defaultProps = {
    onClick: null
}

SelectDropdown.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

export default SelectDropdown
