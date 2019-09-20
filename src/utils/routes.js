import { getUser } from '@utils/auth'

const routeHasNameAndPath = route => !!route && !!route.name && !!route.path

const checkPermissions = routesToCheck => {
    const user = getUser()
    return routesToCheck.filter(rote => rote.guard.some(role => role === user.role))
}

const combineLinkedRoutes = routesToCombine =>
    routesToCombine.filter(routeHasNameAndPath).reduce((links, { name, path }) => {
        links[name] = path
        return links
    }, {})

const combineRoutes = (...routesToCombine) => routesToCombine.reduce((allRoutes, route) => allRoutes.concat(route), [])

export { checkPermissions, combineLinkedRoutes, combineRoutes }
