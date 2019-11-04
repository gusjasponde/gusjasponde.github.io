import { createMuiTheme } from '@material-ui/core/styles'

const black = '#000000'
const white = '#ffffff'
const lightGrey = '#bfbfbf'
const grey = '#56565a'

const palette = {
	primary: {
		main: black, 
		contrastText: white
	},
	secondary: {
		main: white
	},
	text: {
		primary: white,
		secondary: lightGrey,
		divider: grey
	},
	background: {
		paper: black,
		default: black
	}
}
const themeName = 'dark'

export default createMuiTheme({ 
	palette, 
	themeName
})