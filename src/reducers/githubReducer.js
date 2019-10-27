import * as githubConstants from '../constants/githubConstants'

const initialState = {
	repositories: [],
	info: {}
}

const githubReducer = (state = initialState, action) => {
	switch(action.type) {
	case githubConstants.GITHUB_REPOS_LOAD_SUCCESS:
		return { 
			repositories: [...state.repositories, ...action.repositories],
			info: state.info
		}
	case githubConstants.GITHUB_INFO_LOAD_SUCCESS:
		return { 
			repositories: [...state.repositories],
			info: action.info
		}
	default:
		return state
	}
}

export default githubReducer