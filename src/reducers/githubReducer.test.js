import 'mocha'
import { expect } from 'chai'

import githubReducer from './githubReducer'
import * as constants from '../constants/githubConstants'

describe('githubReducer', () => {
	it('should reduce load repositories in background', () => {
		const previousState = {
			repositories: [],
			info: {},
			gpgKeys: []
		}
		const dispatch = {
			type: constants.GITHUB_REPOS_LOAD_SUCCESS,
			repositories: ['newRepository'],
		}
		const result = githubReducer(previousState, dispatch)
		expect(result.repositories).to.be.deep.equal(['newRepository'])
	})

	it('should reduce load info in background', () => {
		const previousState = {
			repositories: [],
			info: 'oldInfo',
			gpgKeys: []
		}
		const dispatch = {
			type: constants.GITHUB_INFO_LOAD_SUCCESS,
			info: 'newInfo',
		}
		const result = githubReducer(previousState, dispatch)
		expect(result.info).to.be.deep.equal('newInfo')
	})

	it('should reduce load gpg keys in background', () => {
		const previousState = {
			repositories: [],
			info: 'oldInfo',
			keys: []
		}
		const dispatch = {
			type: constants.GITHUB_GPG_LOAD_SUCCESS,
			keys: ['key1', 'key2'],
		}
		const result = githubReducer(previousState, dispatch)
		expect(result.keys).to.be.deep.equal(['key1', 'key2'])
	})

	it('should reduce to previous state correctly', () => {
		const previousState = {
			repositories: ['oldState'],
			info: { 'info' : 'info'},
			keys: ['key1', 'key2']
		}
		const dispatch = {
			type: 'someOtherType',
			repositories: ['newState'],
			info: {},
			keys:	['key3']
		}
		const result = githubReducer(previousState, dispatch)
		expect(result).to.be.equal(previousState)
	})
})