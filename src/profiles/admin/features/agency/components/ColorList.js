import styled from 'styled-components'
import { colors } from '@helpers/colors'

const Options = styled.div`
    background-color: ${colors.white};
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.13);
    cursor: pointer;
    max-height: 11.25rem;
    overflow: auto;
    position: absolute;
    width: 100%;

    &::-webkit-scrollbar {
        background-color: transparent;
        width: 0.75rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.lightGray};
        border-radius: 8px;

        &:hover {
            background-color: ${colors.darkGray};
        }
        &:active {
            background-color: ${colors.mediumGray};
        }
    }
`

const ColorOption = styled.div`
    height: 1.75rem;
    padding: 1.25rem;

    &:hover {
        background-color: ${colors.grayHover};
    }
`

const Palette = styled.div`
    background-image: linear-gradient(to right, ${({ from }) => from} 0%, ${({ to }) => to} 100%);
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    height: 1.75rem;
    width: 100%;
`

export { Options, ColorOption, Palette }
