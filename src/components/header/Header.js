import React from 'react'
import styled from 'styled-components'

import Brand from '@components/brand/Brand'
import Configurations from '@components/configurations/Configurations'
import Menu from '@components/menu/Menu'
import Notifications from '@components/notifications/Notifications'
import Profile from '@components/profile/Profile'

const StyledHeader = styled.header`
    align-content: center;
    display: flex;
    grid-area: header;
    justify-content: space-between;
    padding: 1rem 0;
`
const StyledOptions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 150px;
`

const Header = () => (
    <StyledHeader>
        <Brand />
        <Menu />
        <StyledOptions>
            <Profile />
            <Notifications />
            <Configurations />
        </StyledOptions>
    </StyledHeader>
)

export default Header
