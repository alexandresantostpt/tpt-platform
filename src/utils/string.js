const isString = s => typeof s === 'string'

const replaceEnterWithSpace = s => s.replace(/(\n|↵)/g, ' ')

export { isString, replaceEnterWithSpace }
