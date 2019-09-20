import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TipEdit = lazy(() => import('./containers/TipEdit'))
const TipForm = lazy(() => import('./containers/TipForm'))
const TipList = lazy(() => import('./containers/TipList'))

const routes = [
    {
        component: () => <TipForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'tip',
        path: '/travel/:id/script/tip'
    },
    { component: () => <TipEdit />, guard: [roles.ADMIN, roles.CONSULTANT], path: '/travel/:id/script/tip/:tipId' },
    {
        component: () => <TipList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'tipList',
        path: '/travel/:id/script/tips'
    }
]

export { routes }
