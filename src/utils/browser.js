import QueryString from 'query-string'

import { history } from '@cfg/history'

const elementIs = (element, is) => element.tagName.toLowerCase() === is
const getQueryParams = () => QueryString.parse(location.search)
const getServiceId = () => {
    const {
        location: { pathname }
    } = window
    return pathname.substring(pathname.lastIndexOf('/') + 1)
}
const navigateTo = path => history.push(path)

export { elementIs, getQueryParams, getServiceId, navigateTo }
