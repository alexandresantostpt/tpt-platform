import React from 'react'

import { i18n } from '@i18n'

import Dropdown from '@components/dropdown/Dropdown'
import DropdownItem from '@components/dropdown/item/DropdownItem'
import DropdownLabel from '@components/dropdown/label/DropdownLabel'
import DropdownTitle from '@components/dropdown/title/DropdownTitle'

import { getUser } from '@utils/auth'
import { navigateTo } from '@/utils/browser'

import { routesAgencyRegistration } from '@profiles/admin/features/agency/routes'
import If from '../if/If'

const Profile = () => {
    const user = getUser()
    return (
        <Dropdown image="https://api.adorable.io/avatars/100/tpt-platform" imageAlt="Johnny Silva">
            <DropdownItem>
                <DropdownTitle>{i18n.t('titles.myProfile')}</DropdownTitle>
            </DropdownItem>
            <DropdownItem bigger>
                <DropdownLabel dark>{user ? user.name : ''}</DropdownLabel>
                <DropdownLabel>{user ? user.email : ''}</DropdownLabel>
            </DropdownItem>
            <DropdownItem bigger>
                <DropdownLabel dark>{i18n.t('labels.activitiesRegistry')}</DropdownLabel>
                <DropdownLabel>Atualizado às 8:45</DropdownLabel>
            </DropdownItem>
            <If condition={user && user.isAdmin()}>
                <DropdownItem bigger onClick={() => navigateTo(routesAgencyRegistration.path)}>
                    <DropdownLabel dark>{i18n.t('labels.editAgency')}</DropdownLabel>
                </DropdownItem>
            </If>
        </Dropdown>
    )
}

export default Profile
