import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { serviceRoutes } from '@constants/services'

import { formatOptions } from '@utils/select'

import Select from '@components/select/Select'

const StyledServiceSelect = styled.div`
    display: flex;
`

const ServiceSelect = ({ onSelect }) => (
    <StyledServiceSelect>
        <Select hasDefault={false} icon={'plus'} onSelect={onSelect} options={formatOptions(serviceRoutes, 'text', 'value')} />
    </StyledServiceSelect>
)

ServiceSelect.propTypes = {
    onSelect: PropTypes.func.isRequired
}

export default ServiceSelect
