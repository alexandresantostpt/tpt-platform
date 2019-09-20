import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const TransferForm = lazy(() => import('./containers/TransferForm'))

const routes = [
    {
        component: () => <TransferForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        name: 'transferForm',
        path: '/travel/:id/script/transfer'
    },
    {
        component: () => <TransferForm />,
        guard: [roles.ADMIN, roles.CONSULTANT],
        path: '/travel/:id/script/transfer/:idTransfer'
    }
]

export { routes }
