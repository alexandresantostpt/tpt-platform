import PropTypes from 'prop-types'
import React from 'react'

import Icon from '@components/icon/Icon'

const MenuIcon = ({ icon, fontSize }) => <Icon fontSize={fontSize} icon={icon} />

MenuIcon.defaultProps = {
    fontSize: '1.5rem'
}

MenuIcon.propTypes = {
    fontSize: PropTypes.string,
    icon: PropTypes.string.isRequired
}

export default MenuIcon
