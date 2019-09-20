import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'

const StyledBox = styled.div`
    background: #fdfdfd;
    border: ${borders.default};
    border-radius: 10px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.85;
    padding: 2.2rem 1.75rem;
`

const Box = ({ children }) => <StyledBox>{children}</StyledBox>

Box.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Box
