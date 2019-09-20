import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { borders } from '@helpers/borders'
import { fieldInvalid } from '@helpers/mixins'

const StyledField = styled.input`
    border: none;
    border-bottom: ${borders.default};
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    margin-bottom: 0.9375rem;
    ${fieldInvalid};
    padding: 0.3125rem;
    transition: all 0.15s linear;
    width: calc(100% - 0.625rem);

    &:focus {
        border-bottom-color: ${({ theme }) => theme.text};
        outline: none;
    }
`

const TagInputField = props => <StyledField {...props} />

TagInputField.defaultProps = {
    required: false,
    value: ''
}

TagInputField.propTypes = {
    form: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default TagInputField
