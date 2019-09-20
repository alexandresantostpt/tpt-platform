import React from 'react'
import renderer from 'react-test-renderer'

import TipServiceModel from '../../models/TipServiceModel'

import TipForm from '../TipForm'

describe('Tests for TipForm component', () => {
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

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <TipForm
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSaveDataAction={jest.fn()}
                    tip={tip}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
