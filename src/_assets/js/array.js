import sortBy from 'sort-by'

import { not } from '@utils/functions'

if (not(Array.prototype.$sortBy)) {
    Array.prototype.$sortBy = function(by) {
        return this.sort(sortBy(by))
    }
}
