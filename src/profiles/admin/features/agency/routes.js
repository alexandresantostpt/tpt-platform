import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const AgencyRegistration = lazy(() => import('./containers/AgencyRegistration'))

const routesAgencyRegistration = {
    component: () => <AgencyRegistration />,
    guard: [roles.ADMIN],
    name: 'agencyRegistration',
    path: '/agency/register'
}

export { routesAgencyRegistration }
