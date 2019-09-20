import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledMenuLink = styled(Link)`
    color: ${({ theme }) => theme.primary};
    font-family: Lato, Arial, sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.1s linear;

    &:active {
        color: ${({ theme }) => theme.primary};
    }

    &:hover {
        color: ${({ theme }) => theme.primaryLight};
    }
`

const MenuLink = ({ children, path }) => <StyledMenuLink to={path}>{children}</StyledMenuLink>

MenuLink.propTypes = {
    children: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default MenuLink
