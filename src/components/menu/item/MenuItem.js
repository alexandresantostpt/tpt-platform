import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import MenuIcon from '../icon/MenuIcon'
import MenuLink from '../link/MenuLink'

const StyledMenuItem = styled.li`
    color: ${({ theme }) => theme.primary};
    list-style: none;
    padding: 0;
`

const MenuItem = ({ fontSize, icon, label, path }) => (
    <StyledMenuItem>
        <MenuIcon fontSize={fontSize} icon={icon} />
        <MenuLink path={path}>{i18n.t(`menus.${label}`)}</MenuLink>
    </StyledMenuItem>
)

MenuItem.defaultProps = {
    fontSize: '1.5rem'
}

MenuItem.propTypes = {
    fontSize: PropTypes.string,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default MenuItem
