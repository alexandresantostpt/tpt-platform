import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

const StyledCenter = styled.div`
    text-align: center;
`

const StyledCancel = styled.button`
    background: none;
    border: none;
    color: #3cb1ff;
    margin-top: 1rem;
    &:hover {
        cursor: pointer;
    }
`

const Cancel = ({ onClick }) => (
    <StyledCenter>
        <StyledCancel onClick={onClick}>{i18n.t('link.cancel')}</StyledCancel>
    </StyledCenter>
)

Cancel.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Cancel
