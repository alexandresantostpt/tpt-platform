import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Icon from '@components/icon/Icon'
import If from '@components/if/If'

import Tab from './Tab'
import TabTitle from './TabTitle'

import { aerialFormFields } from '../../fields'

const StyledTabs = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 3.125rem;
`

const Tabs = props => {
    const { activeTab, parts, removePartsLastItem, updateParts, updateActiveTab } = props
    const addTab = () => {
        if (parts.length < 3) {
            updateParts([...parts, aerialFormFields(parts.length)])
            updateActiveTab(parts.length)
        }
    }
    const removeTab = () => {
        updateActiveTab(activeTab - 1)
        removePartsLastItem()
    }
    return (
        <StyledTabs>
            {parts.map((_, index) => (
                <Tab active={index === activeTab} key={index}>
                    <TabTitle onClick={() => updateActiveTab(index)}>{`${i18n.t('labels.part')}  ${index + 1}`}</TabTitle>
                    <If condition={index === parts.length - 1}>
                        <Icon fontSize={'1.5rem'} icon={'times'} onClick={removeTab} />
                    </If>
                </Tab>
            ))}
            <Tab bolder={true} onClick={addTab}>
                <TabTitle>
                    <If condition={parts.length < 3} el={'+'}>
                        {i18n.t('labels.addPart')}
                    </If>
                </TabTitle>
            </Tab>
        </StyledTabs>
    )
}
Tabs.defaultProps = {
    activeTab: 0,
    parts: []
}

Tabs.propTypes = {
    activeTab: PropTypes.number,
    parts: PropTypes.array,
    removePartsLastItem: PropTypes.func.isRequired,
    updateActiveTab: PropTypes.func.isRequired,
    updateParts: PropTypes.func.isRequired
}
export default Tabs
