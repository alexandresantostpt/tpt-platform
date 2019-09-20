import React from 'react'
import renderer from 'react-test-renderer'

import TourServiceModel from '../../models/TourServiceModel'
import TourForm from '../TourForm'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for TourForm component', () => {
    const tour = new TourServiceModel({
        __v: 0,
        _id: '5c825ffc650a395fa6d49254',
        createdAt: '2019-03-08T12:28:44.199Z',
        describe: 'Teste',
        duration: '10 minutos',
        guideOrDriver: 'Guia',
        includedMeals: [],
        language: 'Português',
        localOperator: 'Teste',
        outDate: '2019-02-01T02:00:00.000Z',
        outHour: '2019-02-01T02:00:00.000Z',
        passenger: ['5c757fb2f1a4a01bbfe7b21b'],
        peopleCount: 5,
        script: '5c757fb2f1a4a01bbfe7b21d',
        scriptDate: '2019-02-04T00:00:00.000Z',
        title: 'Teste',
        tourType: 'Privativo',
        transferType: 'teste',
        type: 'TOUR',
        updatedAt: '2019-03-08T12:28:44.199Z'
    })
    const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <TourForm
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSaveDataAction={jest.fn()}
                    resetSuggestionsAction={jest.fn()}
                    tour={tour}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
