import { css } from 'styled-components'

import { colors } from './colors'

const fieldInvalid = css`
    background: ${({ isInvalid }) => (isInvalid ? colors.fieldInvalid : 'transparent')};
`

export { fieldInvalid }
