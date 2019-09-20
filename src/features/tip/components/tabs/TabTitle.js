import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
const StyledTabTitle = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.4rem;
    opacity: 0.7;
`

const TabTitle = ({ children }) => <StyledTabTitle>{children}</StyledTabTitle>

TabTitle.defaultProps = {
    children: null
}

TabTitle.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string])
}
export default TabTitle
