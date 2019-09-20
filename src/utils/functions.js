import { isNull, isUndefined } from 'lodash'

const not = expression => !expression

let debounceTimeout = null

const debounce = (cb, time) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(cb, time)
}
const isEmpty = o => {
    if (o) {
        if (o.length) {
            return !o.length
        }
        if (Object.keys(o).length) {
            return false
        }
    }
    return true
}
const isNotEmpty = o => !isEmpty(o)
const isNotNull = o => not(isNull(o))
const isUndefinedObj = obj => isUndefined(obj)
const isNotUndefined = obj => not(isUndefined(obj))
const isObject = o => isNotNull(o) && isNotUndefined(o) && typeof o === 'object'

const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)

/* eslint-disable complexity */
const isValidCPF = cpf => {
    cpf = cpf.replace(/[.-]/g, '')
    const invalidCpfs = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000'
    ]

    if (invalidCpfs.filter(current => current === cpf).length > 0) {
        return false
    }

    let sum = 0
    let remainder = 0
    let i = 0
    if (cpf === '00000000000') {
        return false
    }

    for (i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i), 10) * (11 - i)
    }

    remainder = (sum * 10) % 11

    if (remainder === 10 || remainder === 11) {
        remainder = 0
    }
    if (remainder !== parseInt(cpf.substring(9, 10), 10)) {
        return false
    }

    sum = 0
    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i), 10) * (12 - i)
    }

    remainder = (sum * 10) % 11

    if (remainder === 10 || remainder === 11) {
        remainder = 0
    }
    if (remainder !== parseInt(cpf.substring(10, 11), 10)) {
        return false
    }

    return true
}

const isValidCNPJ = cnpj => {
    cnpj = cnpj.replace(/[^\d]+/g, '')
    if (cnpj.length !== 14) {
        return false
    }
    if (/^(\d)\1+$/.test(cnpj)) {
        return false
    }

    const t = cnpj.length - 2,
        d = cnpj.substring(t),
        d1 = parseInt(d.charAt(0), 10),
        d2 = parseInt(d.charAt(1), 10),
        calc = x => {
            const n = cnpj.substring(0, x)
            let y = x - 7,
                s = 0,
                r = 0

            for (let i = x; i >= 1; i--) {
                s += n.charAt(x - i) * y--
                if (y < 2) {
                    y = 9
                }
            }

            r = 11 - (s % 11)
            return r > 9 ? 0 : r
        }

    return calc(t) === d1 && calc(t + 1) === d2
}

function isValidEmail(email) {
    /* eslint-disable max-len */
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function getBooleanValue(value) {
    if (value === 'yes') {
        return true
    }

    if (value === 'no') {
        return false
    }

    return null
}

function fromBooleanValue(value) {
    if (value === true || value === 'yes') {
        return 'yes'
    }

    if (value === false || value === 'no') {
        return 'no'
    }

    return null
}

export {
    debounce,
    fromBooleanValue,
    getBooleanValue,
    isEqual,
    isEmpty,
    isNotEmpty,
    isNotNull,
    isObject,
    isUndefinedObj,
    isUndefined,
    isNotUndefined,
    not,
    isValidCPF,
    isValidEmail,
    isValidCNPJ
}
