import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { makeStyles } from '@material-ui/core/styles'
import mainListItems from './listItems'

const drawerSize = 240

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	sidebarPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerSize,
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	
}))

let App = ({handleDrawerClose}) => {
	const classes = useStyles()
	const listItems = mainListItems()

	return(
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{listItems}</List>
			</Drawer>
			<Grid item xs={9} sm={9} md={9} >
				<div className={classes.paper}>
				</div>
				<Copyright/>
			</Grid>
		</Grid>
	)
}

App.propTypes = {
	setPage: PropTypes.func,
	handleDrawerClose: PropTypes.func
}

export default App
