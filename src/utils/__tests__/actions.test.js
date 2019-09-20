import { config } from '@config'

import { createAction, getAction } from '../actions'

describe('Test for actions utils', () => {
    const actionPrefix = config.app.namespace.toUpperCase()
    const actionName = 'TESTE'

    it('Should create a new action', () => {
        const action = createAction(actionName)
        const payload = 'Testing'
        const expectedAction = {
            payload,
            type: `${actionPrefix}_${actionName}`
        }
        expect(action(payload)).toEqual(expectedAction)
    })

    it('Should get a correct action name', () => {
        const action = getAction(actionName)
        expect(action).toEqual(`${actionPrefix}_${actionName}`)
    })
})
