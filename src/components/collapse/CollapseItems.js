import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledCollapseItems = styled.div`
    display: ${({ visible }) => (visible ? 'block' : 'none')};
`

const CollapseItems = props => {
    const { visible, children } = props
    return <StyledCollapseItems visible={visible}>{children}</StyledCollapseItems>
}

CollapseItems.defaultProps = {
    children: null,
    visible: true
}

CollapseItems.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    visible: PropTypes.bool
}

export default CollapseItems
