import Reactotron from 'reactotron-react-js'
import sagaPlugin from 'reactotron-redux-saga'

import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({
    name: 'TPT - Platform'
})
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

console.tron = Reactotron

export { reactotron }
