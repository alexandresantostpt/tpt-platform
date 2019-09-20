import { combineLinkedRoutes, combineRoutes } from '../routes'

describe('Tests for routes utils', () => {
    const routesA = [{ component: 'A', name: 'a', path: '/a' }]
    const routesB = [{ component: 'B', path: '/b' }]
    const routesC = [{ component: 'C', name: 'c', path: '/c' }]

    it('Should return system routes', () => {
        const combinedRoutes = combineRoutes(routesA, routesB, routesC)
        expect(combinedRoutes).toEqual([...routesA, ...routesB, ...routesC])
    })

    it('Should return linked routes', () => {
        const combinedRoutes = combineRoutes(routesA, routesB, routesC)
        const linkedRoutes = combineLinkedRoutes(combinedRoutes)
        const expectedLinkedRoutes = {
            a: '/a',
            c: '/c'
        }
        expect(linkedRoutes).toEqual(expectedLinkedRoutes)
    })
})
