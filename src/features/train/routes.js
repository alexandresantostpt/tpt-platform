import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TrainForm = lazy(() => import('./containers/TrainForm'))

const routes = [
    {
        component: () => <TrainForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'trainForm',
        path: '/travel/:id/script/train'
    },
    { component: () => <TrainForm />, guard: [roles.ADMIN, roles.CONSULTANT], path: '/travel/:id/script/train/:idTrain' }
]

export { routes }
