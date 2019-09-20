import React from 'react'
import renderer from 'react-test-renderer'

import TransferServiceModel from '../../models/TransferServiceModel'

import TransferForm from '../TransferForm'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for TransferForm component', () => {
    const transfer = new TransferServiceModel({
        __v: 1,
        _id: '5c814d89650a397729d49239',
        assistance: 'Personalizada',
        car: {
            board: 'teste',
            model: 'teste'
        },
        createdAt: '2019-03-07T16:57:45.994Z',
        date: '2019-03-07T15:00:00.000Z',
        driver: {
            howIdentify: 'teste'
        },
        guideOrDriver: 'Guia',
        hour: '2019-03-07T17:00:00.528Z',
        localOperator: 'teste',
        meetPoint: 'teste',
        name: 'teste',
        passenger: ['5c757fb2f1a4a01bbfe7b21b'],
        script: '5c810f5f3a2fd643bf8a8236',
        scriptDate: '2019-02-03T00:00:00.000Z',
        transferType: 'Privado',
        type: 'TRANSFER',
        updatedAt: '2019-03-07T17:09:08.506Z'
    })
    const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

    it('Should render without crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <TransferForm
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSaveDataAction={jest.fn()}
                    transfer={transfer}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
