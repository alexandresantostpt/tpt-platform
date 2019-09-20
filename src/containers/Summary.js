import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSummary = styled.section`
    background: #fbfbfb;
    border: 1px solid #dcdcdc;
    border-right: none;
    grid-area: summary;
    overflow-y: auto;
    padding: 3.125rem 1.1875rem;
`

const Summary = ({ children }) => <StyledSummary>{children}</StyledSummary>

Summary.defaultProps = {
    children: null
}

Summary.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Summary
