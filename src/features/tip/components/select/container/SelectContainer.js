import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import SelectText from '../text/SelectText'

import Icon, { StyledIcon } from '@components/icon/Icon'

const StyledSelectContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space: nowrap;
    width: 100%;

    ${StyledIcon} {
        &:hover {
            cursor: pointer;
        }
    }
`

const SelectContainer = ({ optionSelected, expanded, onClick }) => (
    <StyledSelectContainer>
        <SelectText onClick={onClick}>
            {optionSelected || i18n.t('placeholders.selectCategorie')}
            <Icon icon={expanded ? 'arrow-up' : 'arrow-down'} />
        </SelectText>
    </StyledSelectContainer>
)

SelectContainer.defaultProps = {
    optionSelected: {}
}

SelectContainer.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    optionSelected: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default SelectContainer
