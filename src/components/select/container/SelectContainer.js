import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { isNotEmpty } from '@utils/functions'

import SelectText from '../text/SelectText'
import SelectDropdown from '../dropdown/SelectDropdown'

import Icon, { StyledIcon } from '@components/icon/Icon'
import If from '@components/if/If'

const StyledSelectContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    ${StyledIcon} {
        &:hover {
            cursor: pointer;
        }
    }
`

const SelectContainer = ({ icon, optionSelected, expanded, onClick }) => (
    <StyledSelectContainer>
        <If
            condition={isNotEmpty(icon)}
            el={<SelectText onClick={onClick}>{optionSelected.text || i18n.t('placeholders.select')}</SelectText>}
        >
            <SelectText onClick={onClick}>
                <Icon icon={icon} />
            </SelectText>
        </If>
        <SelectDropdown expanded={expanded} onClick={onClick} />
    </StyledSelectContainer>
)

SelectContainer.defaultProps = {
    icon: '',
    onClick: null,
    optionSelected: {}
}

SelectContainer.propTypes = {
    expanded: PropTypes.bool.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    optionSelected: PropTypes.object
}

export default SelectContainer
