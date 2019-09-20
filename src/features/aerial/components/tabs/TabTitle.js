import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTabTitle = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 0.7rem;
    line-height: 1.7rem;
    opacity: 0.37;
    white-space: nowrap;
`

const TabTitle = ({ children, onClick }) => <StyledTabTitle onClick={onClick}>{children}</StyledTabTitle>

TabTitle.defaultProps = {
    children: null,
    onClick: null
}

TabTitle.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func
}
export default TabTitle
