import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { fieldInvalid } from '@helpers/mixins'

import Textarea from 'react-textarea-autosize'

const StyledFormText = styled(Textarea)`
    ${fieldInvalid};
    resize: none;
`

const FormTextArea = props => <StyledFormText {...props} type="text" />

FormTextArea.propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default FormTextArea
