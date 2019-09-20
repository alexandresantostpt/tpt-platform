import { validate } from '../form'

describe('Tests for form utils', () => {
    it("Should return a required error when field it's required but have no value", () => {
        const values = { myField: '' }
        const fields = [{ name: 'myField', required: true }]
        const errors = validate(values, fields)
        expect(errors.myField).toContain('fieldRequired')
    })

    it("Should not return a required error when field it's required but have value", () => {
        const values = { myField: 'Testing' }
        const fields = [{ name: 'myField', required: true }]
        const errors = validate(values, fields)
        expect(errors.myField).toBeUndefined()
    })
})
