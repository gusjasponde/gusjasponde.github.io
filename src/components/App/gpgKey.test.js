import 'mocha'

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme' 
import '../../dictionary'

configure ({adapter: new Adapter()})

import GpgKey from './gpgKey.js'

function setup() {
	const props = {
		gpg: {
			'id': 0,
			'raw': 'fjksal',
			'emails': [
				{
					'email': 'mail',
					'verified': true
				}
			]
		},
	}
	return shallow(<GpgKey {...props} />)
}

describe('GpgKey', () => {
	it('should build GpgKey component', () => {
		const wrapper = setup()
		expect(wrapper.find('div')).to.have.length(0)
	})
})