import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Collapse from '@components/collapse/Collapse'
import FormField from '@components/form/field/FormField'

import clientFormFields from './clientFormFields'

const StyledTrainClientForm = styled.div`
    margin-top: 3rem;
`

const TrainClientForm = props => {
    const { clients, form, selected } = props
    const clientsSelected = [...selected.map(item => clients.find(client => client._id === item))]
    return (
        <StyledTrainClientForm>
            {clientsSelected &&
                clientsSelected.map((client, index) => {
                    const fieldName = `passengersValues[${index}]`
                    const fields = clientFormFields(fieldName, index)
                    form.current.form.change(`${fieldName}.client`, client._id)
                    return (
                        <span key={index}>
                            <FormField {...fields[0]} form={form} value={client.name} />
                            <Collapse>
                                {fields.slice(1).map((field, i) => (
                                    <FormField {...field} form={form} key={i} />
                                ))}
                            </Collapse>
                        </span>
                    )
                })}
        </StyledTrainClientForm>
    )
}

TrainClientForm.defaultProps = {
    clients: [],
    form: {},
    name: '',
    selected: []
}

TrainClientForm.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.object),
    form: PropTypes.object,
    name: PropTypes.string,
    selected: PropTypes.array
}

export default TrainClientForm
