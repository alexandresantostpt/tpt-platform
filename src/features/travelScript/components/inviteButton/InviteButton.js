import PropTypes from 'prop-types'
import React from 'react'
import { i18n } from '@i18n'
import AddButton from './AddButton'
import StyledInviteButton from './StyledInviteButton'

const InviteButton = ({ onClick, round }) => {
    if (round) {
        return <AddButton onClick={onClick}>+</AddButton>
    }

    return <StyledInviteButton onClick={onClick}>{i18n.t('buttons.invite')}</StyledInviteButton>
}

InviteButton.defaultProps = {
    round: false
}

InviteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    round: PropTypes.bool
}

export default InviteButton
