import { actions } from '../constants'

import * as tipActions from '../actions'

import { getAction } from '@utils/actions'

import TipServiceModel from '../models/TipServiceModel'

describe('Tests for Tip actions', () => {
    const tip = new TipServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        address: 'Test',
        category: 'Category',
        describe: 'Describe',
        observations: 'Test',
        phone: '01934568945',
        script: '5c52ebcd5fc7c9b1433ab704',
        scriptDate: '2019-03-12T20:00:00.458Z',
        site: 'site',
        subCategory: 'subCategory',
        title: 'Title',
        type: 'Type',
        workDays: 'From monday to thursday',
        workEnd: '2019-03-12T20:00:00.458Z',
        workStart: '2019-03-12T08:00:00.458Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const type = getAction(actions.TIP_DEL)

        expect(tipActions.delAction()).toEqual({ type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TIP_GET_SINGLE)

        expect(tipActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TIP_REQUEST_DEL)

        expect(tipActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TIP_REQUEST_GET_SINGLE)

        expect(tipActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = tip
        const type = getAction(actions.TIP_REQUEST_SAVE_DATA)

        expect(tipActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const type = getAction(actions.TIP_SAVE_DATA)

        expect(tipActions.saveDataAction()).toEqual({ type })
    })
})
