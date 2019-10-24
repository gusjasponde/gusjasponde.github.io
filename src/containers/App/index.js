import React from 'react'
import PropTypes from 'prop-types'

import App from '../../components/App'
import { connect } from 'react-redux'

class AppContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			drawerOpen: true,
		}

		this.props = {
			changeState: this.changeState.bind(this)
		}
	}

	static propTypes = {
		changeState: PropTypes.func
	}

	changeState(object) {
		this.setState(object)
	}

	render() {
		return (
			<App
				drawerOpen={this.state.drawerOpen}
				changeState={this.props.changeState}/>
		)
	}
}

const mapStateToProps = () =>
	({})

export default connect(mapStateToProps, null)(AppContainer)