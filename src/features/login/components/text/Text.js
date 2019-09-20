import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
    color: #858899;
    font-size: 1.75rem;
`

const Text = ({ children }) => <StyledText>{children}</StyledText>

Text.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Text
