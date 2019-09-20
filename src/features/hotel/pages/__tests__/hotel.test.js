import React from 'react'
import renderer from 'react-test-renderer'

import HotelForm from '../HotelForm'
import HotelServiceModel from '@/features/hotel/models/HotelServiceModel'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for Hotel component', () => {
    const hotel = new HotelServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        address: 'Rua endereço',
        checkInDate: '2019-03-01T00:00:00.000Z',
        checkInHour: '2019-03-01T19:00:00.000Z',
        checkOutDate: '2019-03-02T00:00:00.000Z',
        checkOutHour: '2019-03-02T19:00:00.000Z',
        createdAt: '2019-02-21T00:00:00.000Z',
        differences: 'Restarante Michelin no hotel',
        guestCount: '4',
        includedMeals: ['Café da manhã', 'Jantar'],
        name: 'Four seasons',
        roomType: 'Deluxe',
        script: '5c792717e6e603726db85733',
        scriptDate: '2019-03-01T17:10:10.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })
    const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

    it('Should render withou crash', () => {
        const match = { params: { id: '5c702543793e3b6d3d2f7aa6' } }
        const tree = renderer
            .create(
                <HotelForm
                    hotel={hotel}
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    resetSuggestionsAction={jest.fn()}
                    travelRequestGetSingleAction={jest.fn()}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
