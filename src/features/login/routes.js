import { roles } from '@constants/roles'

import React, { lazy } from 'react'

const Feedback = lazy(() => import('./containers/Feedback'))
const ForgotPassword = lazy(() => import('./containers/ForgotPassword'))
const Login = lazy(() => import('./containers/Login'))
const RedefinePassword = lazy(() => import('./containers/RedefinePassword'))
const ResetPassword = lazy(() => import('./containers/ResetPassword'))

const routesFeedback = {
    component: () => <Feedback />,
    guard: [roles.ADMIN, roles.CLIENT, roles.CONSULTANT, roles.MASTER],
    name: 'feedback',
    path: '/feedback'
}

const routesForgotPassword = {
    component: () => <ForgotPassword />,
    guard: [roles.ADMIN, roles.CONSULTANT, roles.MASTER],
    name: 'forgotPassword',
    path: '/forgotPassword'
}

const routesLogin = { component: () => <Login />, guard: [roles.ADMIN, roles.CONSULTANT, roles.MASTER], name: 'login', path: '/login' }

const routesRedefinePassword = {
    component: () => <RedefinePassword />,
    guard: [roles.ADMIN, roles.CONSULTANT, roles.MASTER],
    name: 'redefinePassword',
    path: '/redefinePassword'
}

const routesResetPassword = {
    component: () => <ResetPassword />,
    guard: [roles.ADMIN, roles.CLIENT, roles.CONSULTANT, roles.MASTER],
    name: 'resetPassword',
    path: '/reset/password'
}

export { routesFeedback, routesForgotPassword, routesLogin, routesRedefinePassword, routesResetPassword }
