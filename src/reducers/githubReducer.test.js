import 'mocha'
import { expect } from 'chai'

import githubReducer from './githubReducer'
import constants from '../constants/githubConstants'

describe('githubReducer', () => {
	it('should reduce load background success', () => {
		const previousState = ['oldRepository']
		const dispatch = {
			type: constants.GITHUB_LOAD_SUCCESS,
			repositories: ['newRepository'],
		}
		const result = githubReducer(previousState, dispatch)
		expect(result).to.be.equal(['newRepository'])
	})

	it('should reduce to previous state correctly', () => {
		const previousState = ['oldState']
		const dispatch = {
			type: 'someOtherType',
			repositories: ['newState'],
		}
		const result = githubReducer(previousState, dispatch)
		expect(result).to.be.equal(previousState)
	})
})