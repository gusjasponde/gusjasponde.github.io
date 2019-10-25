import * as githubConstants from '../constants/githubConstants'

const githubReducer = (state = [], action) => {
	switch(action.type) {
	case githubConstants.GITHUB_LOAD_SUCCESS:
		return [...state, ...action.repositories]
	default:
		return state
	}
}

export default githubReducer