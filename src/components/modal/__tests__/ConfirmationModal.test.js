import React from 'react'
import renderer from 'react-test-renderer'

import ConfirmationModal from '../ConfirmationModal'

describe('Tests for ConfirmationModal component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<ConfirmationModal openModal={true} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
