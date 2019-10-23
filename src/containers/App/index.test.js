import 'mocha'

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme' 
import configureStore from 'redux-mock-store'

import AppContainer from './index'

configure({ adapter: new Adapter() })

function setup() {
	const props = {
		store: configureStore([])({})
	}
	return shallow(<AppContainer {...props} />)
}

describe('appContainer', () => {
	it('should build appContainer', () => {
		const wrapper = setup()
		expect(wrapper).to.be.a('object')
	})
})