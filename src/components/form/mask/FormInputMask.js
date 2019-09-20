import { events } from '@constants/events'

import Cleave from 'cleave.js/react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { fieldInvalid } from '@helpers/mixins'

const StyledFormInputMask = styled(Cleave)`
    background-color: transparent;
    ${fieldInvalid};
    pointer-events: ${({ readOnly }) => (readOnly ? 'none' : null)};
`

const FormInputMask = props => {
    const cleave = useRef()

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => resetValue())
    }, [])

    const resetValue = () => {
        const { current } = cleave
        if (current) {
            current.setRawValue('')
        }
    }
    return <StyledFormInputMask {...props} ref={cleave} />
}

FormInputMask.propTypes = {
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default FormInputMask
