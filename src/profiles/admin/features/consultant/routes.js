import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const ConsultantList = lazy(() => import('./containers/ConsultantList'))

const routes = [
    {
        component: () => <ConsultantList />,
        guard: [roles.ADMIN],
        name: 'consultantList',
        path: '/admin/consultant'
    }
]

export { routes }
