import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    color: ${colors.link};
`

const LinkTo = ({ text, to }) => <StyledLink to={to}>{text}</StyledLink>

LinkTo.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default LinkTo
