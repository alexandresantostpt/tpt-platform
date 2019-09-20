import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { fieldInvalid } from '@helpers/mixins'

const StyledLabel = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 0.4rem;
`

const StyledOption = styled.div`
    margin-top: 0.4rem;
    ${fieldInvalid};
`

const FormClients = ({ clients, name, fieldChildren, form, initialValue, isInvalid, disabled }) => {
    const [selected, updateSelected] = useState([])

    useEffect(() => {
        updateSelected(initialValue)
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelected([]))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const isChecked = option => selected.indexOf(option) >= 0

    const handleOnChange = evt => {
        const option = evt.target.value
        if (isChecked(option)) {
            const newSelected = selected.filter(elm => elm !== option)
            updateSelected(newSelected)
            form.current.form.change(name, newSelected)
        } else {
            const newSelected = [...selected, option]
            updateSelected(newSelected)
            form.current.form.change(name, newSelected)
        }
    }
    return (
        <>
            {clients &&
                clients.map(client => (
                    <StyledOption isInvalid={isInvalid} key={client._id}>
                        <input
                            checked={isChecked(client._id)}
                            disabled={disabled}
                            id={client._id}
                            name={client._id}
                            onChange={handleOnChange}
                            type="checkbox"
                            value={client._id}
                        />
                        <StyledLabel>{client.name}</StyledLabel>
                    </StyledOption>
                ))}
            {fieldChildren && React.cloneElement(fieldChildren, { name: name, selected: selected })}
        </>
    )
}

FormClients.defaultProps = {
    clients: [],
    fieldChildren: null,
    initialValue: []
}

FormClients.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.object),
    fieldChildren: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.array,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default FormClients
