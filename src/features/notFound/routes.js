import React, { lazy } from 'react'

import { roles } from '@constants/roles'

const NotFound = lazy(() => import('./NotFound'))

const routes = [{ component: () => <NotFound />, guard: [roles.ADMIN, roles.CONSULTANT, roles.MASTER], name: 'notFound' }]

export { routes }
