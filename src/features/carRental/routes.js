import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const CarRentalForm = lazy(() => import('./containers/CarRentalForm'))

const routes = [
    {
        component: () => <CarRentalForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'carRentalForm',
        path: '/travel/:id/script/car-rental'
    },
    {
        component: () => <CarRentalForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/car-rental/:idCarRental'
    }
]

export { routes }
