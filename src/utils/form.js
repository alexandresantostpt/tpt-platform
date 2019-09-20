import { setIn } from 'final-form'

import { not, isValidCPF, isValidEmail, isValidCNPJ } from './functions'
import { toInt } from './number'

import { checkIntervalMinute, joinHour } from '@utils/date'

const messages = {
    endDateMustBeAfterStartDate: 'forms.validations.endDateMustBeAfterStartDate',
    fieldRequired: 'forms.validations.fieldRequired',
    invalidCnpj: 'forms.validations.invalidCnpj',
    invalidCpf: 'forms.validations.invalidCpf',
    invalidEmail: 'forms.validations.invalidEmail',
    invalidMax: 'forms.validations.invalidMax',
    invalidMin: 'forms.validations.invalidMin',
    invalidPattern: 'forms.validations.invalidPattern'
}

const splitName = path => path.split(/[.[\]'"]/).filter(p => p)

const resolvePath = (object, path) => splitName(path).reduce((o, p) => o && o[p], object)

const validateIsRequired = (field, values, errors, type) => {
    const { name, required } = field
    if (required) {
        const fieldValue = resolvePath(values, name)
        if (not(fieldValue)) {
            const path = splitName(name)
            const newErrors = setIn(errors, name, messages.fieldRequired)
            errors[path[0]] = newErrors[path[0]]
        }
    }
}

const validateCpf = (field, values, errors, type) => {
    const { name, validation } = field
    const path = splitName(name)
    const insertedValue = resolvePath(values, name)
    if (type === 'array') {
        if (validation === 'cpf' && insertedValue && !isValidCPF(insertedValue)) {
            const newErrors = setIn(errors, name, messages.invalidCpf)
            errors[path[0]] = newErrors[path[0]]
        }
    } else {
        if (validation === 'cpf' && values[name] && !isValidCPF(values[name])) {
            errors[name] = messages.invalidCpf
        }
    }
}

const validateCNPJ = (field, values, errors, type) => {
    const { name, validation } = field
    const path = splitName(name)
    const insertedValue = resolvePath(values, name)
    if (type === 'array') {
        if (validation === 'cnpj' && insertedValue && !isValidCNPJ(insertedValue)) {
            const newErrors = setIn(errors, name, messages.invalidCnpj)
            errors[path[0]] = newErrors[path[0]]
        }
    } else {
        if (validation === 'cnpj' && values[name] && !isValidCNPJ(values[name])) {
            errors[name] = messages.invalidCnpj
        }
    }
}

const validateDate = (field, values, errors) => {
    const { name, validation } = field
    if (validation === 'endDate') {
        const endDate = values[name]
        const startDate =
            values[Object.keys(values).filter(current => current.includes('StartDate') || current.includes('checkInDate'))]

        if (endDate < startDate) {
            errors[name] = messages.endDateMustBeAfterStartDate
        }
    }
}

const validateEmail = (field, values, errors, type) => {
    const { name, validation } = field
    const path = splitName(name)
    const insertedValue = resolvePath(values, name)
    if (type === 'array') {
        if (validation === 'email' && insertedValue && !isValidEmail(insertedValue)) {
            const newErrors = setIn(errors, name, messages.invalidEmail)
            errors[path[0]] = newErrors[path[0]]
        }
    } else {
        if (validation === 'email' && values[name] && !isValidEmail(values[name])) {
            errors[name] = messages.invalidEmail
        }
    }
}

const validateJoinHour = (field, values, errors) => {
    const { name, validation } = field
    if (validation === 'checkOutHour') {
        const startDate = values[Object.keys(values).filter(current => current.includes('checkInDate'))]
        const startHour = values[Object.keys(values).filter(current => current.includes('checkInHour'))]
        const endDate = values[Object.keys(values).filter(current => current.includes('checkOutDate'))]
        const endHour = values[Object.keys(values).filter(current => current.includes('checkOutHour'))]

        const initialTime = joinHour(startDate, startHour).format()
        const finalTime = joinHour(endDate, endHour).format()

        if (not(checkIntervalMinute(initialTime, finalTime))) {
            errors[name] = messages.endDateMustBeAfterStartDate
        }
    }
}

const validateMax = (field, values, errors, type) => {
    const { max, name } = field
    const path = splitName(name)
    const insertedValue = resolvePath(values, name)
    if (insertedValue) {
        if (type === 'array') {
            if (toInt(insertedValue) > max) {
                const newErrors = setIn(errors, name, messages.invalidMax)
                errors[path[0]] = newErrors[path[0]]
            }
        } else {
            if (toInt(insertedValue) > max) {
                errors[name] = messages.invalidMax
            }
        }
    }
}

const validateMin = (field, values, errors, type) => {
    const { min, name } = field
    const path = splitName(name)
    const insertedValue = resolvePath(values, name)
    if (insertedValue) {
        if (type === 'array') {
            if (toInt(insertedValue) < min) {
                const newErrors = setIn(errors, name, messages.invalidMin)
                errors[path[0]] = newErrors[path[0]]
            }
        } else {
            if (toInt(insertedValue) < min) {
                errors[name] = messages.invalidMin
            }
        }
    }
}

const validatePattern = (field, values, errors, type) => {
    const { name, pattern } = field
    if (pattern) {
        const path = splitName(name)
        const insertedValue = resolvePath(values, name)
        if (insertedValue) {
            if (type === 'array') {
                /* eslint-disable-next-line max-depth */
                if (not(pattern.test(insertedValue))) {
                    const newErrors = setIn(errors, name, messages.invalidPattern)
                    errors[path[0]] = newErrors[path[0]]
                }
            } else {
                /* eslint-disable-next-line max-depth */
                if (not(pattern.test(insertedValue))) {
                    errors[name] = messages.invalidPattern
                }
            }
        }
    }
}

const validate = (values, fields) => {
    const errors = {}
    fields.forEach(field => {
        if (Array.isArray(field)) {
            field.forEach(element => {
                validateIsRequired(element, values, errors, 'array')
                validateCpf(element, values, errors, 'array')
                validateCNPJ(element, values, errors, 'array')
                validateDate(element, values, errors)
                validateEmail(element, values, errors, 'array')
                validateJoinHour(element, values, errors)
                validateMax(element, values, errors, 'array')
                validateMin(element, values, errors, 'array')
                validatePattern(element, values, errors, 'array')
            })
        } else {
            validateIsRequired(field, values, errors)
            validateCpf(field, values, errors)
            validateCNPJ(field, values, errors)
            validateDate(field, values, errors)
            validateEmail(field, values, errors)
            validateJoinHour(field, values, errors)
            validateMax(field, values, errors)
            validateMin(field, values, errors)
            validatePattern(field, values, errors)
        }
    })
    return errors
}

export { validate }
