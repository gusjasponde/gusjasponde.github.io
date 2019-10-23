import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

const configureStore = (initState = {}) => 
	createStore(rootReducer, initState, applyMiddleware(thunk))

export default configureStore