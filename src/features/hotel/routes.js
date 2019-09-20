import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const HotelForm = lazy(() => import('./containers/HotelForm'))

const routes = [
    {
        component: () => <HotelForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'hotel',
        path: '/travel/:id/script/hotel'
    },
    { component: () => <HotelForm />, guard: [roles.ADMIN, roles.CONSULTANT], path: '/travel/:id/script/hotel/:idService' }
]

export { routes }
