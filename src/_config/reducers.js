import { combineReducers } from 'redux-immutable'

import { connectRouter } from 'connected-react-router'

import { reducers as aerialReducers } from '@features/aerial/reducers'
import { reducers as agencyReducers } from '@profiles/admin/features/agency/reducers'
import { reducers as newAgencyReducers } from '@profiles/admin/features/newAgency/reducers'
import { reducers as carRentalReducers } from '@features/carRental/reducers'
import { reducers as clientReducers } from '@features/client/reducers'
import { reducers as consultantReducers } from '@profiles/admin/features/consultant/reducers'
import { reducers as cruiseReducers } from '@features/cruise/reducers'
import { reducers as hotelReducers } from '@features/hotel/reducers'
import { reducers as libraryReducers } from '@features/library/reducers'
import { reducers as loginReducers } from '@features/login/reducers'
import { reducers as programmingReducers } from '@features/programming/reducers'
import { reducers as restaurantReducers } from '@features/restaurant/reducers'
import { reducers as tasksReducers } from '@features/tasks/reducers'
import { reducers as tipReducers } from '@features/tip/reducers'
import { reducers as toastReducers } from '@components/toast/reducers'
import { reducers as tourReducers } from '@features/tour/reducers'
import { reducers as trainReducers } from '@features/train/reducers'
import { reducers as transferReducers } from '@features/transfer/reducers'
import { reducers as travelReducers } from '@features/travel/reducers'
import { reducers as travelScriptReducers } from '@features/travelScript/reducers'

import { history } from './history'

const reducers = combineReducers({
    aerialReducers,
    agencyReducers,
    carRentalReducers,
    clientReducers,
    consultantReducers,
    cruiseReducers,
    hotelReducers,
    libraryReducers,
    loginReducers,
    newAgencyReducers,
    programmingReducers,
    restaurantReducers,
    router: connectRouter(history),
    tasksReducers,
    tipReducers,
    toastReducers,
    tourReducers,
    trainReducers,
    transferReducers,
    travelReducers,
    travelScriptReducers
})

export { reducers }
