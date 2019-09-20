import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'

const StyledMichelinRating = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    ${StyledIcon} {
        font-size: 2.5em;
        &:hover {
            cursor: pointer;
        }
    }
`

const MichelinRating = ({ disabled, form, name, initialValue }) => {
    const [rating, updateRating] = useState(0)

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateRating(0))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        initialValue && updateRating(initialValue)
    }, [initialValue])

    const onClick = value => {
        const newValue = value === 1 && rating === 1 ? 0 : value
        updateRating(newValue)
        form.current.form.change(name, newValue)
    }

    return (
        <StyledMichelinRating>
            <Icon disabled={rating < 1} icon="michelin-star" onClick={() => onClick(1)} />
            <Icon disabled={rating < 2} icon="michelin-star" onClick={() => onClick(2)} />
            <Icon disabled={rating < 3} icon="michelin-star" onClick={() => onClick(3)} />
        </StyledMichelinRating>
    )
}

MichelinRating.defaultProps = {
    disabled: false,
    initialValue: null
}

MichelinRating.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default MichelinRating
