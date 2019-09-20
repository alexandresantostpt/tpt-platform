import PropTypes from 'prop-types'
import React from 'react'

import Description from './styledComponents/Description'
import Label from './styledComponents/Label'
import Col from './styledComponents/Col'
import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'

const Tip = ({ library, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>Dicas</ServiceHeader>
        <Col>
            <Label>{library && library.category}</Label>
            <Description>{library && library.subCategory}</Description>
        </Col>
    </ServiceContainer>
)

Tip.defaultProps = {
    library: {}
}

Tip.propTypes = {
    library: PropTypes.shape({
        category: PropTypes.string,
        subCategory: PropTypes.string
    }),
    type: PropTypes.string.isRequired
}

export default Tip
