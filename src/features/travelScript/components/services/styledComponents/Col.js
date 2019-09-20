import React from 'react'
import styled from '@react-pdf/styled-components'

const StyledCol = styled.View`
    flex-direction: column;
    margin: 0;
    ${({ flexTable }) =>
        flexTable &&
        `
        border: 0.5pt solid #707070;
        flex: 1;
        `}
    padding: 5pt 2pt;
`

const Col = props => <StyledCol {...props} wrap={false} />

export default Col
