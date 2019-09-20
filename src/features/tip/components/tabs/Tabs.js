import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Tab from './Tab'
import TabTitle from './TabTitle'

const StyledTabs = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 3.125rem;
`

const Tabs = props => {
    const { activeTab, updateActiveTab } = props
    const tabs = ['hotel', 'tour', 'tip']
    return (
        <StyledTabs>
            {tabs.map((tab, index) => (
                <Tab active={tab === activeTab} key={index} onClick={() => updateActiveTab(tab)}>
                    <TabTitle>{i18n.t(`labels.${tab}`)}</TabTitle>
                </Tab>
            ))}
        </StyledTabs>
    )
}
Tabs.defaultProps = {
    activeTab: '0',
    parts: [],
    updateParts: null
}

Tabs.propTypes = {
    activeTab: PropTypes.string,
    parts: PropTypes.array,
    updateActiveTab: PropTypes.func.isRequired,
    updateParts: PropTypes.func
}
export default Tabs
