import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const typeStyles = css`
    ${({ dark }) => {
        if (dark) {
            return `
                font-size: 1rem;
                font-weight: 500;
            `
        }
        return `
            font-size: .9rem;
            font-weight: 100;
        `
    }}
`

const StyledDropdownLabel = styled.span`
    color: #707070;
    display: block;
    ${typeStyles};
    width: 385px;
`

const DropdownLabel = ({ dark, children }) => <StyledDropdownLabel dark={dark}>{children}</StyledDropdownLabel>

DropdownLabel.defaultProps = {
    dark: false
}

DropdownLabel.propTypes = {
    children: PropTypes.string.isRequired,
    dark: PropTypes.bool
}

export default DropdownLabel
