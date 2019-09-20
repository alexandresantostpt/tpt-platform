import React from 'react'
import styled from 'styled-components'

import { routes } from '@cfg/routes'

import MenuItem from '../item/MenuItem'
import { getUser } from '@utils/auth'

import If from '@components/if/If'

import { not } from '@utils/functions'

const StyledMenuList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 100%;
`

const MenuList = () => {
    const user = getUser()
    return (
        <StyledMenuList>
            <If condition={not(user && user.isMaster())}>
                <If condition={user && user.isAdmin()}>
                    <MenuItem fontSize="1.8rem" icon="adm" label="administrator" path={routes.consultantList} />
                </If>
                <MenuItem fontSize="2.5rem" icon="plane" label="travels" path={routes.travelList} />
                <MenuItem fontSize="2rem" icon="clients" label="clients" path={routes.clientList} />
                <MenuItem fontSize="2.3rem" icon="bookmark" label="library" path={routes.library} />
            </If>
        </StyledMenuList>
    )
}

export default MenuList
