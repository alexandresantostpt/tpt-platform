import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
    display: inline-block;
    flex: 5;
    padding-left: 0.5rem;
    vertical-align: middle;
`

const Body = props => <StyledBody {...props} />

Body.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Body
