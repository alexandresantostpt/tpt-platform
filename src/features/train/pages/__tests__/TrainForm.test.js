import React from 'react'
import renderer from 'react-test-renderer'

import TrainForm from '../TrainForm'

import TrainServiceModel from '../../models/TrainServiceModel'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for TrainForm component', () => {
    const clients = [
        {
            __v: 0,
            _id: '5c9b6c386ffd761521bd80df',
            active: false,
            blocked: false,
            cpf: '123.123.123-12',
            createdAt: '2019-03-27T12:27:36.838Z',
            email: 'teste@teste.com',
            name: 'Viajante teste',
            password: '1b621fe4e8bd896fa918088696a393ab2330ee73373efe770833b85598756a28',
            updatedAt: '2019-03-27T12:27:36.838Z'
        }
    ]
    const train = new TrainServiceModel({
        __v: 0,
        _id: '5c9b70786ffd767caabd80e5',
        companyName: 'Nome da companhia',
        createdAt: '2019-03-27T12:45:44.438Z',
        destiny: { city: 'teste', state: 'teste' },
        from: {
            city: 'Cidade de origem',
            date: '2019-03-27T00:00:00.000Z',
            hour: '2019-03-27T13:00:00.489Z',
            state: 'Estação de origem'
        },
        hourEstimatedArrival: '2019-03-27T11:00:00.692Z',
        passengers: [
            { _id: '5c9b70786ffd763279bd80e6', client: '5c9b6c386ffd761521bd80df', platform: 'A1', seat: '11B', wagon: '22' }
        ],
        script: '5c9b6c386ffd76125cbd80e1',
        scriptDate: '2019-03-27T00:00:00.000Z',
        type: 'TRAIN',
        updatedAt: '2019-03-27T12:45:44.438Z'
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
                <TrainForm
                    clients={clients}
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetListAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSearchAction={jest.fn()}
                    train={train}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
