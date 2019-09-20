import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    display: flex;
    flex-flow: column wrap;
    list-style: none;
    margin-top: 0.5rem;
`

const TagInputList = ({ children }) => <StyledList>{children}</StyledList>

TagInputList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default TagInputList
