import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TourForm = lazy(() => import('./containers/TourForm'))

const routes = [
    {
        component: () => <TourForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'tourForm',
        path: '/travel/:id/script/tour'
    },
    { component: () => <TourForm />, guard: [roles.ADMIN, roles.CONSULTANT], path: '/travel/:id/script/tour/:idTour' }
]

export { routes }
