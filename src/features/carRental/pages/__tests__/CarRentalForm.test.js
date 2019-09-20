import React from 'react'
import renderer from 'react-test-renderer'

import CarRentalServiceModel from '../../models/CarRentalServiceModel'

import CarRentalForm from '../CarRentalForm'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for CarRentalForm component', () => {
    const rent = new CarRentalServiceModel({
        __v: 1,
        _id: '5c815c95650a39608fd4923f',
        carModel: 'modelo do carro',
        createdAt: '2019-03-07T18:01:57.211Z',
        devolution: {
            address: 'endereço de devolução',
            date: '2019-03-14T15:00:00.000Z',
            hour: '2019-03-07T22:00:00.434Z',
            name: 'Nome do local de devolução',
            operationHourEnd: '2019-02-01T18:00:00.000Z',
            operationHourStart: '2019-02-01T09:00:00.000Z',
            phoneNumber: 'telefone da locadora'
        },
        isIncluded: 'teste',
        name: 'Nome da locadora',
        passengerResponsible: ['5c757fb2f1a4a01bbfe7b21b'],
        requiredDocuments: ['cnh'],
        retire: {
            address: 'Endereço de retirada',
            date: '2019-03-07T15:00:00.000Z',
            hour: '2019-03-07T20:00:00.463Z',
            name: 'Nome local de retirada',
            operationHourEnd: '2019-02-01T18:00:00.000Z',
            operationHourStart: '2019-02-01T09:00:00.000Z',
            phoneNumber: 'Telefone da locadora'
        },
        script: '5c757fb2f1a4a01bbfe7b21d',
        scriptDate: '2019-02-03T00:00:00.000Z',
        type: 'CAR_RENTAL',
        updatedAt: '2019-03-07T18:02:27.854Z'
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
                <CarRentalForm
                    match={match}
                    rent={rent}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSearchAction={jest.fn()}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
