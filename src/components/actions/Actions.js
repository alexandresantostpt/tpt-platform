import { events } from '@constants/events'

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'

import Icon, { StyledIcon } from '@components/icon/Icon'
import { i18n } from '@i18n'

import { colors } from '@helpers/colors'

const Menu = styled.td`
    align-items: flex-start;
    display: flex;
    height: 3.12rem;
    justify-content: flex-start;
    padding: 0 1rem;
    width: 1.8rem;

    ${StyledIcon} {
        align-self: center;
        color: ${colors.mediumGray};
        display: none;
        font-size: 2.5rem;
    }
`
const Option = styled.button`
    background: transparent;
    border: 0;
    border-bottom: 1px ${colors.lightGray} solid;
    color: ${colors.text};
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 300;
    height: 2.5313rem;
    outline: none;
    padding: 0.5rem 1rem;
    text-align: left;
    width: 10rem;
    &:hover {
        background: #eceff6;
        box-shadow: 5px 7px 10px 0 rgba(0, 0, 0, 0.09);
    }
    &:last-child {
        &:hover {
            border-radius: 0 0 8px 8px;
        }
    }
    &:first-child {
        &:hover {
            border-radius: 8px 8px 0 0;
        }
    }
`

const OptionsContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.18);
    position: relative;
    right: 12.5rem;
    top: 0.3rem;
`

const Actions = ({ item, onDelete, onEdit, onUnarchive }) => {
    const [showOptions, updateShowOptions] = useState(false)
    const [archived, updateArchived] = useState(false)

    useEffect(() => {
        if (item.archived) {
            updateArchived(true)
        }
        if (item.archived !== archived) {
            updateShowOptions(false)
        }
    }, [item])

    const handleDelClick = () => {
        PubSub.publish(events.OPEN_MODAL, item)
    }

    const showMenu = () =>
        showOptions ? (
            <OptionsContainer>
                {onDelete ? <Option onClick={() => handleDelClick()}>{i18n.t('actions.delete')}</Option> : null}
                {onEdit ? <Option onClick={() => onEdit && onEdit(item)}>{i18n.t('actions.edit')}</Option> : null}
                {onUnarchive && item.archived ? <Option onClick={() => onUnarchive(item)}>{i18n.t('actions.unshelve')}</Option> : null}
            </OptionsContainer>
        ) : null

    return (
        <>
            <Menu
                onBlur={() => updateShowOptions(false)}
                onClick={() => updateShowOptions(true)}
                onMouseLeave={() => updateShowOptions(false)}
            >
                <Icon fontSize="1.5rem" icon="menu" pointer={true} />
                {showMenu()}
            </Menu>
        </>
    )
}

Actions.defaultProps = {
    onDelete: null,
    onEdit: null,
    onUnarchive: null
}

Actions.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onUnarchive: PropTypes.func,
    showActions: PropTypes.bool.isRequired
}

export default Actions
