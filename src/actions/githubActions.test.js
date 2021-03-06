 
import 'mocha'
import { expect } from 'chai'

import { githubReposLoadSuccess, githubReposLoadFail , githubInfoLoadSuccess, githubInfoLoadFail, githubGPGLoadSuccess, githubGPGLoadFail } from './githubActions'
import * as constants from '../constants/githubConstants'

describe('githubActions', () => {
	it('should dispatch repos load success', () => {
		const result = githubReposLoadSuccess(['repos'])

		expect(result.type).to.be.equal(constants.GITHUB_REPOS_LOAD_SUCCESS)
		expect(result.repositories).to.be.deep.equal(['repos'])
	})

	it('should dispatch repos load fail', () => {
		const result = githubReposLoadFail()

		expect(result.type).to.be.equal(constants.GITHUB_REPOS_LOAD_FAIL)
		expect(result.repositories).to.be.deep.equal([])
	})

	it('should dispatch info load success', () => {
		const result = githubInfoLoadSuccess({'info': 'info'})

		expect(result.type).to.be.equal(constants.GITHUB_INFO_LOAD_SUCCESS)
		expect(result.info).to.be.deep.equal({'info': 'info'})
	})

	it('should dispatch info load fail', () => {
		const result = githubInfoLoadFail()

		expect(result.type).to.be.equal(constants.GITHUB_INFO_LOAD_FAIL)
		expect(result.info).to.be.deep.equal({})
	})

	it('should dispatch gpg load success', () => {
		const result = githubGPGLoadSuccess(['key'])

		expect(result.type).to.be.equal(constants.GITHUB_GPG_LOAD_SUCCESS)
		expect(result.keys).to.be.deep.equal(['key'])
	})

	it('should dispatch gpg load fail', () => {
		const result = githubGPGLoadFail()

		expect(result.type).to.be.equal(constants.GITHUB_GPG_LOAD_FAIL)
		expect(result.keys).to.be.deep.equal([])
	})
})