import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import CardHeader from './CardHeader'
import CardDescription from './CardDescription'

const StyledTipCard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.19rem 0.375rem 0 rgba(0, 0, 0, 0.08);
    margin: 1.5rem 0;
    padding: 1rem 1rem 0;
`

const TipCard = ({ onRemove, onSelect, tip }) => (
    <StyledTipCard>
        <CardHeader onRemove={onRemove} onSelect={onSelect} tip={tip} />
        <CardDescription tip={tip} />
    </StyledTipCard>
)

TipCard.defaultProps = {
    onRemove: null,
    onSelect: null
}

TipCard.propTypes = {
    onRemove: PropTypes.func,
    onSelect: PropTypes.func,
    tip: PropTypes.object.isRequired
}

export default TipCard
