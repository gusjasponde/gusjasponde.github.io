import * as githubConstants from '../constants/githubConstants'

const initialState = {
	repositories: [],
	info: {},
	keys: []
}

const githubReducer = (state = initialState, action) => {
	switch(action.type) {
	case githubConstants.GITHUB_REPOS_LOAD_SUCCESS:
		return { 
			repositories: [...state.repositories, ...action.repositories],
			info: state.info,
			keys: [...state.keys]
		}
	case githubConstants.GITHUB_INFO_LOAD_SUCCESS:
		return { 
			repositories: [...state.repositories],
			info: action.info,
			keys: [...state.keys]
		}
	case githubConstants.GITHUB_GPG_LOAD_SUCCESS:
		return { 
			repositories: [...state.repositories],
			info: state.info,
			keys: [...state.keys, ...action.keys]
		}
	default:
		return state
	}
}

export default githubReducer