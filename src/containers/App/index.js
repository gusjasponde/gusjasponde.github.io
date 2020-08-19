import React from 'react'
import PropTypes from 'prop-types'
import App from '../../components/App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubActions from '../../actions/githubActions'
import { withTheme } from '@material-ui/core/styles'
import withRootTheme from './withRootTheme'

class AppContainer extends React.Component {

	static propTypes = {
		actions: PropTypes.object,
		github: PropTypes.object
	}

	constructor(props) {
		super(props)
		this.state = {
			github: {},
			gpgModalOpen: false,
		}
	}

	toggleGPGModal(){
		this.setState({gpgModalOpen: !this.state.gpgModalOpen})
	}

	componentDidMount() {
		this.props.actions.loadGithubProjects()
		this.props.actions.loadGithubInfo()
		this.props.actions.loadGPGInfo()
	}

	render() {
		return (
			<App
				githubInfo={this.props.github.info}
				githubRepositories={this.props.github.repositories}
				gpgKeys={this.props.github.keys}
				gpgModalOpen={this.state.gpgModalOpen}
				toggleGPGModal={this.toggleGPGModal.bind(this)}/>
		)
	}
}

const mapStateToProps = (state) =>
	({ github: state.githubReducer })

const mapDispatchToProps = (dispatch) => 
	({ actions: bindActionCreators(githubActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(withRootTheme( withTheme(AppContainer)))