import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import BgLibrary from '@img/background/library.png'

const StyledContainer = styled.main`
    background: #fbfbfb;
    background-image: ${({ showBg }) => (showBg ? `url(${BgLibrary})` : null)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #dcdcdc;
    grid-area: container;
    padding: 3.125rem 0;
`

const Container = ({ children, showBg }) => <StyledContainer showBg={showBg}>{children}</StyledContainer>
Container.defaultProps = {
    children: null,
    showBg: false
}

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.number, PropTypes.object, PropTypes.string]),
    showBg: PropTypes.bool
}

export default Container
