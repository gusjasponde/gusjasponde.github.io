import React from 'react'

import App from '../../components/App'
import { connect } from 'react-redux'

class AppContainer extends React.Component {

	constructor(props) {
		super(props)
		this.setState = this.setState.bind(this)
	}

	render() {
		return (
			<App/>
		)
	}
}

const mapStateToProps = () =>
	({})

export default connect(mapStateToProps, null)(AppContainer)