import PropTypes from 'prop-types'
import styled from 'styled-components'

const TipCount = styled.span`
    font-weight: bold;
    &::before {
        content: '+';
        margin-left: 0.25rem;
    }
`

TipCount.propTypes = {
    children: PropTypes.number.isRequired
}

export default TipCount
