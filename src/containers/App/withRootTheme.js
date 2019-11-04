import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import themes from '../../ui/themes'

function withRoot(Component) {
	function WithRoot(props) {
		return (
			<MuiThemeProvider theme={themes['main']}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...props} />
			</MuiThemeProvider>
		)
	}

	return WithRoot
}

export default withRoot