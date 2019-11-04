import 'mocha'

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme' 
import '../../dictionary'

configure ({adapter: new Adapter()})

import App from './index.js'

function setup() {
	const props = {
		githubRepositories: [{
			'name': 'name',
			'html_url': 'url',
			'description': 'description',
			'language': 'JavaScript',
		}],
		githubInfo: {
			'name': 'name',
			'avatar_url': 'avatar_url',
			'email': 'email',
			'blog': 'blog',
			'html_url': 'html_url'
		}
	}
	return shallow(<App {...props} />)
}

describe('App', () => {
	it('should build app component', () => {
		const wrapper = setup()
		expect(wrapper.find('div')).to.have.length(0)
	})
})