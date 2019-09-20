import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { StyledIcon } from '@components/icon/Icon'

const SelectText = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;

    ${StyledIcon} {
        background: linear-gradient(135deg, ${({ theme }) => theme.primaryDark} 0%, ${({ theme }) => theme.primaryLight} 100%);
        border-radius: 100%;
        display: flex;
        padding: 1px;
        -webkit-text-fill-color: ${colors.white};

        &::before {
            font-size: 15px;
            padding: 5px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`

SelectText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export { SelectText }
export default SelectText
