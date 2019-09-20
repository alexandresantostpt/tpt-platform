import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TravelScriptList = lazy(() => import('./containers/TravelScriptList'))
const TravelScriptPDF = lazy(() => import('./containers/TravelScriptPDF'))

const routes = [
    {
        component: () => <TravelScriptList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'travelScriptList',
        path: '/travel/:id/script'
    },
    {
        component: () => <TravelScriptPDF />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/pdf'
    },
    {
        component: () => <TravelScriptList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'travelScriptService',
        path: '/travel/:id/script/:service'
    },
    {
        component: () => <TravelScriptList />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/:service/:idService'
    }
]

export { routes }
