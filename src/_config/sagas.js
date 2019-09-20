import { all } from 'redux-saga/effects'

import { sagas as aerialSagas } from '@features/aerial/sagas'
import { sagas as agencySagas } from '@profiles/admin/features/agency/sagas'
import { sagas as carRentalSagas } from '@features/carRental/sagas'
import { sagas as clientSagas } from '@features/client/sagas'
import { sagas as consultantSagas } from '@profiles/admin/features/consultant/sagas'
import { sagas as cruiseSagas } from '@features/cruise/sagas'
import { sagas as hotelSagas } from '@features/hotel/sagas'
import { sagas as loginSagas } from '@features/login/sagas'
import { sagas as librarySagas } from '@features/library/sagas'
import { sagas as newAgencySagas } from '@profiles/admin/features/newAgency/sagas'
import { sagas as programmingSagas } from '@features/programming/sagas'
import { sagas as restaurantSagas } from '@features/restaurant/sagas'
import { sagas as tasksSagas } from '@features/tasks/sagas'
import { sagas as tipSagas } from '@features/tip/sagas'
import { sagas as toastSagas } from '@components/toast/sagas'
import { sagas as tourSagas } from '@features/tour/sagas'
import { sagas as trainSagas } from '@features/train/sagas'
import { sagas as transferSagas } from '@features/transfer/sagas'
import { sagas as travelSagas } from '@features/travel/sagas'
import { sagas as travelScriptSagas } from '@features/travelScript/sagas'

function* sagas() {
    yield all([
        aerialSagas(),
        agencySagas(),
        carRentalSagas(),
        clientSagas(),
        consultantSagas(),
        cruiseSagas(),
        hotelSagas(),
        loginSagas(),
        librarySagas(),
        newAgencySagas(),
        programmingSagas(),
        restaurantSagas(),
        tasksSagas(),
        tipSagas(),
        toastSagas(),
        tourSagas(),
        trainSagas(),
        transferSagas(),
        travelSagas(),
        travelScriptSagas()
    ])
}

export { sagas }
