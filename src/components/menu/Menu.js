import React from 'react'
import styled from 'styled-components'

import MenuList from './list/MenuList'

const StyledMenu = styled.nav`
    display: flex;
    width: 100%;
`

const Menu = () => (
    <StyledMenu>
        <MenuList />
    </StyledMenu>
)

export default Menu
