import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    background: #fbfbfb;
    border: 1px solid #dcdcdc;
    grid-area: container;
    overflow-y: auto;
    padding: 3.125rem 0;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>
Container.defaultProps = {
    children: null
}

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.number, PropTypes.object, PropTypes.string])
}

export default Container
