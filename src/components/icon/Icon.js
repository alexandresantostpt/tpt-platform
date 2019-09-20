import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '@/helpers/colors'

const StyledIcon = styled.span`
    color: ${({ theme, disabled }) => (disabled ? colors.disabled : theme.primaryDark)};
    cursor: ${({ disabled, onClick, pointer }) => (!disabled && (onClick !== null || pointer) ? 'pointer' : 'auto')};
    font-size: ${({ fontSize }) => fontSize};
    margin-right: 0.25rem;
    position: relative;
    vertical-align: middle;
`

const Icon = ({ disabled, icon, onClick, fontSize, pointer }) => (
    <StyledIcon className={`icon icon-${icon}`} disabled={disabled} fontSize={fontSize} onClick={onClick} pointer={pointer} />
)

Icon.defaultProps = {
    disabled: false,
    fontSize: '1.75rem',
    onClick: null,
    pointer: false
}

Icon.propTypes = {
    disabled: PropTypes.bool,
    fontSize: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    pointer: PropTypes.bool
}

export { StyledIcon }
export default Icon
