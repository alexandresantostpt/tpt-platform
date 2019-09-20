import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TravelList = lazy(() => import('./containers/TravelList'))

const routes = [
    {
        component: () => <TravelList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'travelList',
        path: '/'
    }
]

export { routes }
