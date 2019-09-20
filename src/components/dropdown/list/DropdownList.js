import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const expandedStyles = css`
    ${({ expanded }) => {
        if (expanded) {
            return `
                opacity: 1;
                transform: translateY(0);
            `
        }
        return `
            opacity: 0;
            transform: translateY(-300px);
        `
    }}
`

const StyledDropdownList = styled.ul`
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 7px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.13);
    display: inline-block;
    margin-top: 0.5rem;
    ${expandedStyles};
    position: absolute;
    right: 0;
    top: 35px;
    transition: all 0.2s linear 0.1s;
`

const DropdownList = ({ expanded, children }) => <StyledDropdownList expanded={expanded}>{children}</StyledDropdownList>

DropdownList.defaultProps = {
    expanded: false
}

DropdownList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    expanded: PropTypes.bool
}

export default DropdownList
