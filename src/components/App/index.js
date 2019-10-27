import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Made with ♥ and '}
			<Link color="inherit" href="https://material-ui.com/">
				MaterialUI
			</Link>{', '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
		ul: {
			margin: 0,
			padding: 0,
		},
		li: {
			listStyle: 'none',
		},
	},
	root: {
		display: 'flex'
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(10, 0, 8),
	},
	projectCards: {
		padding: theme.spacing(4, 0, 4)
	},
	cardHeader: {
		backgroundColor: theme.palette.grey[200],
	},
	cardProject: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}))
  
const projects = [
	{
		title: 'Project',
		description: ['Description', 'C++', 'Bitcoin', 'IPFS'],
		buttonText: '',
		buttonVariant: 'outlined',
	}
]

let App = ({ githubRepositories }) => {
	const { t } = useTranslation()
	let text = {
		home: t('home')
	}
	const classes = useStyles()
	const projects = githubRepositories.map((project) => {
		return {
			title: project.name,
			description: [ project.description ],
			language: [ project.language ],
			buttonText: '',
			buttonVariant: 'outlined',
		}
	})

	console.log(githubRepositories)

	return(
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					</Typography>
					<nav>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							{text.home.sections.about}
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							{text.home.sections.projects}
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							{text.home.sections.contact}
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
			<Container component="main">
				{/* Hero unit */}
				<Container maxWidth="md" className={classes.heroContent}>
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						{text.home.name}
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" component="p" gutterBottom>
						{text.home.sub}
					</Typography>
					<Typography align="center" color="textSecondary" component="p">
						{text.home.description}
					</Typography>
				</Container>
				<Container maxWidth="md">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
						{text.home.sections.projects}
					</Typography>
					<Grid container spacing={5} className={classes.projectCards}>
						{projects.map(project => (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={project.title} xs={12} sm={project.title === 'Enterprise' ? 12 : 6} md={4}>
								<Card>
									<CardHeader
										title={project.title}
										subheader={project.subheader}
										titleTypographyProps={{ align: 'center' }}
										subheaderTypographyProps={{ align: 'center' }}
										action={project.title === 'Pro' ? <StarIcon /> : null}
										className={classes.cardHeader}
									/>
									<CardContent>
										<ul>
											{project.description.map(line => (
												<Typography color="textSecondary" component="li" variant="subtitle1" align="center" key={line}>
													{line}
												</Typography>
											))}
											{project.language.map(line => (
												<Typography component="li" variant="subtitle1" align="center" key={line}>
													{line}
												</Typography>
											))}
										</ul>
									</CardContent>
									<CardActions>
										<Button fullWidth variant={project.buttonVariant} color="primary">
											<GitHubIcon />
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				{/* End hero unit */}
				{/* Footer */}
				<Container maxWidth="md" component="footer" className={classes.footer}>
					<Grid container justify="space-evenly">
						{text.home.footer.map(footer => (
							<Grid item xs={1} sm={12} key={footer.title}>
								<Typography variant="h6" color="textPrimary" gutterBottom>
									{footer.title}
								</Typography>
								<ul>
									{footer.description.map(item => (
										<li key={item}>
											<Link href="#" variant="subtitle1" color="textSecondary">
												{item}
											</Link>
										</li>
									))}
								</ul>
							</Grid>
						))}
					</Grid>
					<Box mt={5}>
						<Copyright />
					</Box>
				</Container>
				{/* End footer */}
			</Container>
		</Grid>
	)
}

App.propTypes = {
	githubRepositories: PropTypes.array,
}

export default App
