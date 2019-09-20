import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'

import TagInputContainer from './container/TagInputContainer'
import TagInputItem from './item/TagInputItem'
import TagInputList from './list/TagInputList'

import CitiesSuggest from '@components/form/suggest/CitiesSuggest'

const FormTag = props => {
    const { disabled, isInvalid, resetSuggestions } = props
    const [tags, updateTags] = useState([])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, reset)
        return () => PubSub.unsubscribe(events.FORM_RESET, reset)
    }, [])

    useEffect(() => {
        const { initialValue } = props
        if (initialValue.length) {
            updateTags([...initialValue])
        }
        return reset
    }, [props.initialValue])

    const handleAddTag = citySelected => {
        const { form, name } = props

        if (citySelected) {
            form.current.form.change(name, [...tags, citySelected])
            updateTags([...tags, citySelected])
        }
    }

    const handleRemoveTag = index => {
        const { form, name } = props
        const newTags = tags.filter((_, i) => i !== index)
        form.current.form.change(name, newTags)
        updateTags(newTags)
    }

    const reset = () => {
        updateTags([])
    }

    return (
        <>
            <TagInputList>
                {tags.map((tag, i) => (
                    <TagInputItem disabled={disabled} key={tag.name} onClick={() => handleRemoveTag(i)}>
                        {tag.name}
                    </TagInputItem>
                ))}
            </TagInputList>
            <TagInputContainer>
                <CitiesSuggest
                    {...props}
                    addTag={handleAddTag}
                    disabled={disabled}
                    isInvalid={isInvalid}
                    resetSuggestions={resetSuggestions}
                />
            </TagInputContainer>
        </>
    )
}

FormTag.propTypes = {
    disabled: PropTypes.bool.isRequired,
    form: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
}

export default FormTag
