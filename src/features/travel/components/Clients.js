import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ClientModel from '@features/client/ClientModel'
import FormField from '@components/form/field/FormField'
import clientField from './clientField'

const StyledClients = styled.div`
    padding-bottom: 3rem;
`

const Clients = ({ disabled, form, initialValues }) => (
    <StyledClients>
        {initialValues &&
            initialValues.map((client, index) => (
                <FormField disabled={disabled} form={form} key={index} value={client.name} {...clientField} />
            ))}
    </StyledClients>
)

Clients.defaultProps = {
    disabled: false,
    initialValues: []
}

Clients.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValues: PropTypes.arrayOf(ClientModel)
}

export default Clients
