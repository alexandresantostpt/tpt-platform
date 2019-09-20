import PropTypes from 'prop-types'
// eslint-disable-next-line
import React from 'react'

const Show = ({ children, only }) => only && <>{children}</>

Show.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    only: PropTypes.bool.isRequired
}

export default Show
