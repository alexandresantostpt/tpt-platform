import React from 'react'
import renderer from 'react-test-renderer'

import AddCollaborators from '../AddCollaborators'
import UserModel from '@/features/login/UserModel'

describe('Tests for AddCollaborator component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<AddCollaborators addCollaborator={null} collaborators={[]} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should render with given props', () => {
        const tree = renderer
            .create(
                <AddCollaborators
                    addCollaborator={null}
                    collaborators={[
                        new UserModel({ email: 'test1@email.com', name: 'test1' }),
                        new UserModel({ email: 'test2@email.com', name: 'test2' })
                    ]}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
