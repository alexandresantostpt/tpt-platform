import PropTypes from 'prop-types'
import React from 'react'

import { connect } from 'react-redux'

import { i18n } from '@i18n'

import Dropdown from '@components/dropdown/Dropdown'
import DropdownItem from '@components/dropdown/item/DropdownItem'
import DropdownLabel from '@components/dropdown/label/DropdownLabel'
import DropdownTitle from '@components/dropdown/title/DropdownTitle'

import { requestLogoutAction } from '@features/login/actions'

import { navigateTo } from '@utils/browser'
import { routesRedefinePassword } from '@features/login/routes'

const Configurations = ({ requestLogoutAction: handleLogoutAction }) => {
    const { path } = routesRedefinePassword

    return (
        <Dropdown icon="config">
            <DropdownItem>
                <DropdownTitle>{i18n.t('titles.configurations')}</DropdownTitle>
            </DropdownItem>
            <DropdownItem bigger onClick={() => navigateTo(path)}>
                <DropdownLabel dark>{i18n.t('titles.changePassword')}</DropdownLabel>
            </DropdownItem>
            <DropdownItem bigger center onClick={() => handleLogoutAction()}>
                <DropdownLabel dark>{i18n.t('labels.exit')}</DropdownLabel>
            </DropdownItem>
        </Dropdown>
    )
}

Configurations.propTypes = {
    requestLogoutAction: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    requestLogoutAction
}

export default connect(
    null,
    mapDispatchToProps
)(Configurations)
