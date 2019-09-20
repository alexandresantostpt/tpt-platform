import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const Restaurant = lazy(() => import('./containers/Restaurant'))

const routes = [
    {
        component: () => <Restaurant />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'restaurant',
        path: '/travel/:id/script/restaurant'
    },
    {
        component: () => <Restaurant />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/restaurant/:idService'
    }
]

export { routes }
