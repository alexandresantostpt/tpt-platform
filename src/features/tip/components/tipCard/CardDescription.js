import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Collapse, { StyledCollapseItem } from '@components/collapse/Collapse'

import CardHiddenDesc from './CardHiddenDesc'

const StyledCardDescription = styled.div`
    font-weight: 300;
    padding-top: 0.5rem;
    word-break: break-all;
    ${StyledCollapseItem} {
        margin-bottom: 0;
        margin-top: 0.3rem;
    }
`

const CardDescription = ({ tip }) => (
    <StyledCardDescription>
        {tip.describe}
        <Collapse initialState={false}>
            <CardHiddenDesc tip={tip} />
        </Collapse>
    </StyledCardDescription>
)

CardDescription.propTypes = {
    tip: PropTypes.object.isRequired
}

export default CardDescription
