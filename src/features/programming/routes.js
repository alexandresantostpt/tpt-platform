import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const Programming = lazy(() => import('./containers/Programming'))

const routes = [
    {
        component: () => <Programming />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'programming',
        path: '/travel/:id/script/programming'
    },
    {
        component: () => <Programming />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/programming/:idService'
    }
]

export { routes }
