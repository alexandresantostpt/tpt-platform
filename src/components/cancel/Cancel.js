import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { i18n } from '@i18n'

import { classNames } from '@utils/component'

const StyledCancel = styled(Link)`
    color: #3cb1ff;
    margin-top: 1rem;
`

const Cancel = ({ center, link }) => (
    <StyledCancel className={classNames({ center })} to={link}>
        {i18n.t('link.cancel')}
    </StyledCancel>
)

Cancel.defaultProps = {
    center: false
}

Cancel.propTypes = {
    center: PropTypes.bool,
    link: PropTypes.string.isRequired
}

export default Cancel
