import React from 'react'
import renderer from 'react-test-renderer'

import Table from '@components/table/Table'

describe('Tests for Table component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Table
                    columns={['columnA', 'columnB', 'columnC']}
                    data={[{ columnA: 'Column A', columnB: 'Column B', columnC: 'Column C' }]}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
