import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDropdownItem = styled.li`
    border-top: 1px solid #dcdcdc;
    list-style: none;
    padding: ${({ bigger }) => (bigger ? '.75rem' : '.25rem')} 2rem;
    text-align: ${({ center }) => (center ? 'center' : 'left')};
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`

const DropdownItem = ({ onClick, ...props }) => <StyledDropdownItem onClick={onClick} {...props} />

DropdownItem.defaultProps = {
    bigger: false,
    center: false,
    onClick: null
}

DropdownItem.propTypes = {
    bigger: PropTypes.bool,
    center: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func
}

export default DropdownItem
