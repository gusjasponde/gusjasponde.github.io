import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './dictionary'
import { AppContainer } from './containers'
import configureStore from './store'

const initialState = {}
const store = configureStore(initialState)

render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>
	,
	document.getElementById('app')
)