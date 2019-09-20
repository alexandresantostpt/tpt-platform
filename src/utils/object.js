const compare = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2)
const deepFreeze = obj => Object.freeze(obj) && Object.values(obj).forEach(value => typeof value === 'object' && deepFreeze(value))
const isObject = o => typeof o === 'object'

export { compare, deepFreeze, isObject }
