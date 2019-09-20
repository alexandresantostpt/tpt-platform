import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const AgencyList = lazy(() => import('./containers/AgencyList'))

const routes = {
    component: () => <AgencyList />,
    guard: [roles.MASTER],
    name: 'agencyList',
    path: '/admin/agency'
}

export { routes }
