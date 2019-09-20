import React from 'react'
import renderer from 'react-test-renderer'

import AerialForm from '../AerialForm'

import AerialServiceModel from '../../models/AerialServiceModel'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for Travel component', () => {
    const aerial = new AerialServiceModel({
        __v: 2,
        _id: '5c9a76ee9be6c0345f00c653',
        createdAt: '2019-03-26T19:01:02.109Z',
        journeys: [
            {
                _id: '5c9a79759be6c0231400c658',
                companyName: 'Companhia de testes',
                flightNumber: '123',
                from: { airport: 'teste', city: 'teste', date: '2019-03-27T15:00:00.000Z', hour: '2019-03-26T19:00:00.696Z' },
                passengers: [
                    {
                        _id: '5c9a76ee9be6c00ed700c655',
                        client: '5c9a17959be6c0225700c5ed',
                        reserveCode: '12313',
                        seat: 'teste2',
                        session: 'luxo',
                        ticket: 12313
                    },
                    {
                        _id: '5c9a79759be6c09ba500c659',
                        client: '5c9a24f29be6c0bd9f00c627',
                        reserveCode: 't123s',
                        seat: 'Assento 22b',
                        session: 'teste',
                        ticket: 123123
                    }
                ],
                to: { airport: 'teste', city: 'teste', hour: '2019-03-26T21:30:00.464Z' }
            }
        ],
        script: '5c9a17959be6c0c46200c5ef',
        scriptDate: '2019-03-26T00:00:00.000Z',
        type: 'AERIAL',
        updatedAt: '2019-03-26T19:11:49.707Z'
    })
    const clients = [
        {
            __v: 0,
            _id: '5c9a17959be6c0225700c5ed',
            active: false,
            blocked: false,
            cpf: '123.123.123-12',
            createdAt: '2019-03-26T12:14:13.525Z',
            email: 'teste@teste.com',
            name: 'Viajante 1',
            password: '1b621fe4e8bd896fa918088696a393ab2330ee73373efe770833b85598756a28',
            updatedAt: '2019-03-26T13:15:28.197Z'
        },
        {
            __v: 0,
            _id: '5c9a24f29be6c0bd9f00c627',
            active: false,
            blocked: false,
            cpf: '456.456.986-22',
            createdAt: '2019-03-26T13:11:14.605Z',
            email: 'ts2@ts.com',
            name: 'Ceccon TEST2',
            password: '5f8fd7b0e272f3061fe4e4a399e529e4f5076f9f55389bd8a40fe32d9521e967',
            updatedAt: '2019-03-26T13:46:12.914Z'
        }
    ]
    const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <AerialForm
                    aerial={aerial}
                    clients={clients}
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
