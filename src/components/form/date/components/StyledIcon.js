import styled from 'styled-components'

const StyledIcon = styled.div`
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    position: absolute;
    right: 0;
    top: 24%;

    & span {
        cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    }
`

export default StyledIcon
