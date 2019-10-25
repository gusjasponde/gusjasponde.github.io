import React from 'react'
import PropTypes from 'prop-types'
import App from '../../components/App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubActions from '../../actions/githubActions'

class AppContainer extends React.Component {

	static propTypes = {
		actions: PropTypes.object,
		githubRepositories: PropTypes.array
	}

	constructor(props) {
		super(props)
		this.state = {
			githubRepositories: []
		}
	}

	componentDidMount() {
		this.props.actions.loadGithubProjects()
	}

	render() {
		return (
			<App
				githubRepositories={this.props.githubRepositories}/>
		)
	}
}

const mapStateToProps = (state) =>
	({ githubRepositories: state.githubReducer })

const mapDispatchToProps = (dispatch) => 
	({ actions: bindActionCreators(githubActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)