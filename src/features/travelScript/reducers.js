import { handleActions } from 'redux-actions'
import { cloneDeep } from 'lodash'

import {
    closeMaterialAction,
    delServiceAction,
    getSingleAction,
    shareTravelAction,
    unshareAction,
    updateCityAction,
    updateMaterialAction
} from './actions'

import { logoutAction } from '@features/login/actions'

import { store } from './store'

const reducers = handleActions(
    {
        [closeMaterialAction]: (state, { payload }) => {
            const obj = state.get('obj')

            const newTravelScript = cloneDeep(obj)
            newTravelScript._travel = payload

            return state.set('obj', newTravelScript)
        },
        [delServiceAction]: (state, { payload }) => {
            const obj = state.get('obj')
            const { dateId, serviceId } = payload
            const newTravelScript = cloneDeep(obj)

            const date = newTravelScript.dates.findIndex(elm => elm._id === dateId)
            newTravelScript.dates[date].removeService(serviceId)

            return state.set('obj', newTravelScript)
        },
        [getSingleAction]: (state, { payload }) => state.set('obj', payload),
        [logoutAction]: () => store,
        [shareTravelAction]: (state, { payload }) => {
            const obj = state.get('obj')

            const newTravelScript = cloneDeep(obj)
            newTravelScript._travel = payload

            return state.set('obj', newTravelScript)
        },
        [unshareAction]: (state, { payload }) => {
            const obj = state.get('obj')

            const newTravelScript = cloneDeep(obj)
            newTravelScript.travel.filterUsers(payload)

            return state.set('obj', newTravelScript)
        },
        [updateCityAction]: (state, { payload }) => state.set('obj', payload),
        [updateMaterialAction]: (state, { payload }) => {
            const obj = state.get('obj')

            const newTravelScript = cloneDeep(obj)
            newTravelScript._travel = payload

            return state.set('obj', newTravelScript)
        }
    },
    store
)

export { reducers }
