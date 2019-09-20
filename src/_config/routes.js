import React, { Suspense } from 'react'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { history } from './history'
import { store } from './store'

import { checkPermissions, combineLinkedRoutes, combineRoutes } from '@utils/routes'
import { getUser, isActive, isLogged, isAgencyRegistrationComplete } from '@utils/auth'
import { routes as aerialRoutes } from '@features/aerial/routes'
import { routesAgencyRegistration as agencyRegistrationRoutes } from '@profiles/admin/features/agency/routes'
import { routes as agencyRoutes } from '@profiles/admin/features/newAgency/routes'
import { routes as carRentalRoutes } from '@features/carRental/routes'
import { routes as clientRoutes } from '@features/client/routes'
import { routes as consultantRoutes } from '@profiles/admin/features/consultant/routes'
import { routes as cruiseRoutes } from '@features/cruise/routes'
import { routes as hotelRoutes } from '@features/hotel/routes'
import {
    routesFeedback as feedbackRoutes,
    routesForgotPassword as forgotPasswordRoutes,
    routesLogin as loginRoutes,
    routesRedefinePassword as redefinePasswordRoutes,
    routesResetPassword as resetPasswordRoutes
} from '@features/login/routes'
import { routes as programmingRoutes } from '@features/programming/routes'
import { routes as notFoundRoutes } from '@features/notFound/routes'
import { routes as restaurantRoutes } from '@features/restaurant/routes'
import { routes as tipRoutes } from '@features/tip/routes'
import { routes as tourRoutes } from '@features/tour/routes'
import { routes as trainRoutes } from '@features/train/routes'
import { routes as transferRoutes } from '@features/transfer/routes'
import { routes as travelRoutes } from '@features/travel/routes'
import { routes as travelScriptRoutes } from '@features/travelScript/routes'
import { routes as libraryRoutes } from '@features/library/routes'

import Toasts from '@components/toast/Toasts'
import PageLoading from '@components/pageLoading/PageLoading'
import PrivateRoute from '@components/privateRoute/PrivateRoute'

const _travelServiceRoutes = combineRoutes(
    aerialRoutes,
    carRentalRoutes,
    cruiseRoutes,
    hotelRoutes,
    programmingRoutes,
    restaurantRoutes,
    tipRoutes,
    tourRoutes,
    trainRoutes,
    transferRoutes
)

const _systemRoutes = combineRoutes(
    agencyRegistrationRoutes,
    clientRoutes,
    consultantRoutes,
    libraryRoutes,
    travelRoutes,
    travelScriptRoutes,
    notFoundRoutes // must be last
)

let travelServiceRoutes = _travelServiceRoutes
let systemRoutes = _systemRoutes
let serviceRoutes = combineLinkedRoutes(travelServiceRoutes)

const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={store}>
        <Toasts />
        <ConnectedRouter history={history}>
            <Suspense fallback={<PageLoading />}>
                <Switch>
                    <Route {...loginRoutes} />
                    <Route {...redefinePasswordRoutes} />
                    <Route {...forgotPasswordRoutes} />
                    <Route {...resetPasswordRoutes} />
                    <Route {...feedbackRoutes} />
                    <Route {...agencyRoutes} />
                    <Route {...agencyRegistrationRoutes} />
                    <Route
                        path="*"
                        render={() => {
                            if (isLogged()) {
                                if (getUser().isMaster()) {
                                    return <Redirect to={agencyRoutes.path} />
                                }
                                if (isAgencyRegistrationComplete()) {
                                    if (isActive()) {
                                        travelServiceRoutes = checkPermissions(_travelServiceRoutes)
                                        systemRoutes = checkPermissions(_systemRoutes)
                                        serviceRoutes = combineLinkedRoutes(_travelServiceRoutes)
                                        return (
                                            <Switch>
                                                {systemRoutes.map((route, index) => (
                                                    <PrivateRoute {...route} exact key={index} />
                                                ))}
                                            </Switch>
                                        )
                                    }
                                    return <Redirect to={redefinePasswordRoutes.path} />
                                }
                                return <Redirect to={agencyRegistrationRoutes.path} />
                            }
                            return <Redirect to={loginRoutes.path} />
                        }}
                    />
                </Switch>
            </Suspense>
        </ConnectedRouter>
    </Provider>
)

export { routes, serviceRoutes, travelServiceRoutes }
export default Routes
