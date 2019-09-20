import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

import { StyledIcon } from '@/components/icon/Icon'
import If from '@/components/if/If'
import { Options, ColorOption, Palette } from '../ColorList'
import InputDropdown from '../InputDropdown'

const ColorPickerContainer = styled.div`
    position: relative;

    ${StyledIcon} {
        cursor: pointer;
        margin-left: -1.6875rem;
        position: absolute;
    }
`

const ColorPicker = ({ color, colorList, placeholder, updateColor }) => {
    const [optionsOpen, updateOptionsOpen] = useState(false)

    ColorPicker.handleClickOutside = () => updateOptionsOpen(false)

    const handleClickColor = e => {
        updateColor(e)
        updateOptionsOpen(false)
    }

    return (
        <ColorPickerContainer>
            <InputDropdown onClick={() => updateOptionsOpen(!optionsOpen)} optionsOpen={optionsOpen} placeholder={placeholder} />
            <If condition={optionsOpen}>
                <Options>
                    {colorList.map(e => (
                        <ColorOption key={e.primary} onClick={() => handleClickColor(e)}>
                            <Palette from={e.primaryDark} to={e.primaryLight} />
                        </ColorOption>
                    ))}
                </Options>
            </If>
            {color && <Palette from={color.primaryDark} to={color.primaryLight} />}
        </ColorPickerContainer>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => ColorPicker.handleClickOutside
}

ColorPicker.defaultProps = {
    color: null,
    placeholder: ''
}

ColorPicker.propTypes = {
    color: PropTypes.object,
    colorList: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    updateColor: PropTypes.func.isRequired
}

export default onClickOutside(ColorPicker, clickOutsideConfig)
