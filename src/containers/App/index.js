import React from 'react'

import App from '../../components/App'
import { connect } from 'react-redux'

class AppContainer extends React.Component {
	render() {
		return (
			<App/>
		)
	}
}

const mapStateToProps = () =>
	({})

export default connect(mapStateToProps, null)(AppContainer)