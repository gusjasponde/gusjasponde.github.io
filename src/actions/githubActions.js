import axios from 'axios'
import toastr from 'toastr'
import * as githubConstants from '../constants/githubConstants'
import { useTranslation } from 'react-i18next'

const api = axios.create({
	baseURL: 'https://api.github.com/users/gusjasponde/',
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	},
})

const githubLoadSuccess = (repositories = []) =>
	({ type: githubConstants.GITHUB_LOAD_SUCCESS, repositories })

const githubLoadFail = (repositories = []) =>
	({ type: githubConstants.GITHUB_LOAD_FAIL, repositories })


export const loadGithubProjects = () => {
	return (dispatch) => {
		return api.get('/repos')
			.then((repositories) => {
				dispatch(githubLoadSuccess(repositories.data))
			})
			.catch(() => {
				const { t } = useTranslation()
				let text = {
					error: t('error')
				}

				toastr.error(text.error.github)
				dispatch(githubLoadFail())
			})
	}
}