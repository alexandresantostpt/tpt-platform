import styled from 'styled-components'
import { colors } from '@/helpers/colors'

const StyledInviteButton = styled.button`
    background: transparent;
    border: solid 0.5px ${colors.suvaGray};
    border-radius: 6px;
    color: ${colors.zambezi};
    cursor: pointer;
    display: flex;
    font-size: 15px;
    font-weight: 300;
    justify-content: center;
    letter-spacing: 0.2px;
    padding: 6px 1rem;
    text-align: center;

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
    }
`

export default StyledInviteButton
