import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'
import { borders } from '@helpers/borders'
import { fieldInvalid } from '@helpers/mixins'

import NumberField from './NumberField'
import FormLabel from '@/components/form/label/FormLabel'

const StyledIncreaseDecrease = styled.div`
    border-bottom: ${borders.default};
    margin-bottom: 4rem;
    ${fieldInvalid};
    padding: 0.3125rem;
    position: relative;
    transition: all 0.15s linear;

    ${StyledIcon} {
        font-size: 2rem;
        margin-bottom: 0.25rem;
        margin-right: -0.5rem;
    }
`

const StyledActionContainer = styled.span`
    position: absolute;
    right: 0;
    top: -0.625rem;
`

const IncreaseDecrease = props => {
    const { changeValue, placeholder, value } = props

    const plus = () => changeValue(value + 1)
    const minus = () => value > 1 && changeValue(value - 1)
    return (
        <FormLabel htmlFor={value}>
            {placeholder}
            <StyledIncreaseDecrease>
                <NumberField value={value} />
                <StyledActionContainer>
                    <Icon disabled={parseInt(value, 10) <= 1} fontSize={'2rem'} icon="rounded-minus" onClick={minus} />
                    <Icon fontSize={'2rem'} icon="rounded-plus" onClick={plus} />
                </StyledActionContainer>
            </StyledIncreaseDecrease>
        </FormLabel>
    )
}

IncreaseDecrease.defaultProps = {
    placeholder: '',
    value: 1
}

IncreaseDecrease.propTypes = {
    changeValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.number
}
export default IncreaseDecrease
