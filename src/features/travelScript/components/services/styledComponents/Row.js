import React from 'react'
import styled from '@react-pdf/styled-components'

const StyledRow = styled.View`
    flex-direction: row;
    margin: 0;
`

const Row = props => <StyledRow {...props} wrap={false} />

export default Row
