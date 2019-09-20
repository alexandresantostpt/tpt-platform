import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const AerialForm = lazy(() => import('./containers/AerialForm'))

const routes = [
    {
        component: () => <AerialForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'aerialForm',
        path: '/travel/:id/script/aerial'
    },
    {
        component: () => <AerialForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/aerial/:idAerial'
    }
]

export { routes }
