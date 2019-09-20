import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Collapse from '@components/collapse/Collapse'
import FormField from '@components/form/field/FormField'

import clientFormFields from './clientFormFields'

const StyledAerialClientForm = styled.div`
    margin-top: 3rem;
`

const AerialClientForm = props => {
    const { clients, disabled, form, name, selected } = props
    const clientsSelected = clients && [...selected.map(item => clients.find(client => client._id === item))]
    return (
        <StyledAerialClientForm>
            {clientsSelected &&
                clientsSelected.map((client, index) => {
                    const fieldName = `${name.split(/[.]/)[0]}.passengers[${index}]`
                    const fields = clientFormFields(fieldName, index)
                    form.current.form.change(`${fieldName}.client`, client._id)
                    return (
                        <span key={index}>
                            <FormField {...fields[0]} disabled={disabled} form={form} value={client.name} />
                            <Collapse>
                                {fields.slice(1).map((field, i) => (
                                    <FormField {...field} disabled={disabled} form={form} key={i} />
                                ))}
                            </Collapse>
                        </span>
                    )
                })}
        </StyledAerialClientForm>
    )
}

AerialClientForm.defaultProps = {
    clients: [],
    form: {},
    name: '',
    selected: []
}

AerialClientForm.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.object),
    disabled: PropTypes.bool.isRequired,
    form: PropTypes.object,
    name: PropTypes.string,
    selected: PropTypes.array
}

export default AerialClientForm
