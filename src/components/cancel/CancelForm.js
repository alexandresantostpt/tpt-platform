import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

const StyledCancel = styled.a`
    color: #3cb1ff;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    text-decoration: underline;
`

const CancelForm = ({ action }) => <StyledCancel onClick={action}>{i18n.t('link.cancel')}</StyledCancel>

CancelForm.propTypes = {
    action: PropTypes.func.isRequired
}

export default CancelForm
