import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const CruiseForm = lazy(() => import('./containers/CruiseForm'))

const routes = [
    {
        component: () => <CruiseForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'cruiseForm',
        path: '/travel/:id/script/cruise'
    },
    {
        component: () => <CruiseForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/cruise/:cruiseId'
    }
]

export { routes }
