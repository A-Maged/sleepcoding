import { createStore } from 'redux'

import rootReducer from './reducers/rootReducer'

let store = createStore(rootReducer)

// for debugging
window._store = store

export default store
