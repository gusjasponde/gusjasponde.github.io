import { createMuiTheme } from '@material-ui/core/styles'
const black = '#000000'
const white = '#ffffff'
const indigo ='#3f51b5'
const lightGrey = '#bfbfbf'
const grey = '#56565a'

const palette = {
	primary: {
		main: white, 
		contrastText: black
	},
	secondary: {
		main: indigo
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
const themeName = 'light'

export default createMuiTheme({ 
	palette, 
	themeName
})