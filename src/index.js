import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'

const initialState = {}
const store = configureStore(initialState)

render(
	<Provider store={store}>
		<div>Hello world</div>
	</Provider>
	,
	document.getElementById('app')
)