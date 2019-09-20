import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDropdownTitle = styled.span`
    color: #707070;
    display: block;
    font-size: 0.875rem;
    font-weight: 300;
    opacity: 0.53;
    text-transform: uppercase;
`

const DropdownTitle = ({ children }) => <StyledDropdownTitle>{children}</StyledDropdownTitle>

DropdownTitle.propTypes = {
    children: PropTypes.string.isRequired
}

export default DropdownTitle
