import { isString } from './string'

const classNames = (...classes) =>
    classes.map(clazz => (isString(clazz) ? clazz : Object.keys(clazz).filter(key => clazz[key]))).join(' ')

export { classNames }
