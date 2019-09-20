import React from 'react'

import { i18n } from '@i18n'

import Dropdown from '@components/dropdown/Dropdown'
import DropdownItem from '@components/dropdown/item/DropdownItem'
import DropdownLabel from '@components/dropdown/label/DropdownLabel'
import DropdownTitle from '@components/dropdown/title/DropdownTitle'

const Notifications = () => (
    <Dropdown icon="notification">
        <DropdownItem>
            <DropdownTitle>{i18n.t('titles.notifications')}</DropdownTitle>
        </DropdownItem>
        <DropdownItem bigger>
            <DropdownLabel dark>Alteração serviço</DropdownLabel>
            <DropdownLabel>Há 2 minutos</DropdownLabel>
        </DropdownItem>
        <DropdownItem bigger>
            <DropdownLabel dark>Lembrete: Preencher informações</DropdownLabel>
            <DropdownLabel>Ontem às 15:30</DropdownLabel>
        </DropdownItem>
    </Dropdown>
)

export default Notifications
