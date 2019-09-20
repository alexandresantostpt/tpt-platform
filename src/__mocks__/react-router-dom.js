import React from 'react'

const Link = props => {
    const { children } = props
    return <a {...props}>{children}</a>
}

const withRouter = component => component

export { Link, withRouter }
