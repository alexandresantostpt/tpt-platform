import React from 'react'
import renderer from 'react-test-renderer'

import Restaurant from '../Restaurant'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

describe('Tests for Restaurant component', () => {
    it('Should render withou crash', () => {
        const match = { params: { id: '5c702543793e3b6d3d2f7aa6' } }
        const tree = renderer
            .create(
                <Restaurant
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    restaurant={null}
                    travelRequestGetSingleAction={jest.fn()}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
