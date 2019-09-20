const arrayToString = a => a.map(item => JSON.stringify(item)).join('')
const compareArray = (a1, a2) => arrayToString(a1) === arrayToString(a2)

const lastPosition = a => a[a.length - 1]

export { compareArray, lastPosition }
