import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

const StyledCardHiddenDesc = styled.div`
    font-size: 0.9rem;
`

const CardHiddenDesc = ({ tip }) => (
    <StyledCardHiddenDesc>
        <div>
            {i18n.t('labels.address')}
            {i18n.t('labels.twoPoints')} {tip.address}
        </div>
        <div>
            {i18n.t('labels.phone')}
            {i18n.t('labels.twoPoints')} {tip.phone}
        </div>
        <div>
            {i18n.t('labels.workHours')}
            {i18n.t('labels.twoPoints')} {moment(tip.workStart).format('HH:mm')} as {moment(tip.workEnd).format('HH:mm')}
        </div>
        <div>
            {i18n.t('labels.workDays')}
            {i18n.t('labels.twoPoints')} {tip.workDays}
        </div>
    </StyledCardHiddenDesc>
)

CardHiddenDesc.propTypes = {
    tip: PropTypes.object.isRequired
}

export default CardHiddenDesc
