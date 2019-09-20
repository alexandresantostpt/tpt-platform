import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const ClientList = lazy(() => import('./containers/ClientList'))

const routes = [
    {
        component: () => <ClientList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'clientList',
        path: '/client'
    }
]

export { routes }
