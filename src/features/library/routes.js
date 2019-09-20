import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const Library = lazy(() => import('./containers/Library'))

const routes = [
    {
        component: () => <Library />,
        exact: true,
        guard: [roles.ADMIN, roles.CONSULTANT, roles.MASTER], // FIXME: verify correct roles
        name: 'library',
        path: '/library'
    }
]

export { routes }
