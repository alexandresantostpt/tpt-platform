import React from 'react'
import renderer from 'react-test-renderer'

import { i18n } from '@i18n'

import Dropdown from '@components/dropdown/Dropdown'
import DropdownItem from '@components/dropdown/item/DropdownItem'
import DropdownLabel from '@components/dropdown/label/DropdownLabel'
import DropdownTitle from '@components/dropdown/title/DropdownTitle'

describe('Tests for Dropdown component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Dropdown image="https://api.adorable.io/avatars/100/tpt-platform" imageAlt="Johnny Silva">
                    <DropdownItem>
                        <DropdownTitle>{i18n.t('titles.myProfile')}</DropdownTitle>
                    </DropdownItem>
                    <DropdownItem bigger>
                        <DropdownLabel dark>Johnny Silva</DropdownLabel>
                        <DropdownLabel>johnny.silva@teresaperez.com.br</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem bigger>
                        <DropdownLabel dark>{i18n.t('labels.activitiesRegistry')}</DropdownLabel>
                        <DropdownLabel>Atualizado às 8:45</DropdownLabel>
                    </DropdownItem>
                </Dropdown>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
