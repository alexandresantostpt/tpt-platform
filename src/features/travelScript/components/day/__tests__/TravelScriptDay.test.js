import moment from 'moment'
import React from 'react'
import renderer from 'react-test-renderer'

import TravelScriptDay from '../TravelScriptDay'

describe('Tests for TravelScript component', () => {
    it('Should render withou crash', () => {
        const cities = ['Campinas', 'São Paulo', 'Minas Gerais']
        const tree = renderer
            .create(
                <TravelScriptDay
                    cities={cities}
                    date={moment('2019-03-18').utc(false)}
                    dayNumber={1}
                    id={1}
                    onCityChange={jest.fn()}
                    selectedCity={'Campinas'}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
