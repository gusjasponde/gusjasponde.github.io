import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import GpgKey from './gpgKey'

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
		ul: {
			margin: 0,
			padding: 0,
		},
		li: {
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.text.divider}`,
	},
	avatar: {
		margin: 'auto',
		marginBottom: 40,
		width: 200,
		height: 200,
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
		padding: theme.spacing(4, 0, 4),
	},
	cardHeader: {
		borderBottom: `1px solid ${theme.palette.text.divider}`,
	},
	cardProject: {
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(3),
		border: `1px solid ${theme.palette.primary.contrastText}`,
	},
	gpgDialog: {
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
	},
	gpgDialogContent: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(3),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.text.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
	icon: {
		marginRight: 10,
		marginTop: 10,
		width: 32,
		height: 32
	}
}))

let App = ({ githubInfo, githubRepositories, gpgKeys, gpgModalOpen, toggleGPGModal}) => {
	const { t } = useTranslation()
	let home = t('home')
	let languages = t('languages')

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleLanguageClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuItemClick = (event, value) => {
		i18n.changeLanguage(value)
		setAnchorEl(null)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}


	const classes = useStyles()
	const projects = githubRepositories.map((project) => {
		return {
			title: project.name,
			description: [ project.description ],
			language: [ project.language ],
			buttonText: '',
			buttonVariant: 'outlined',
			url: project.html_url
		}
	})

	const keys = gpgKeys.map((key) => {
		var expDate = new Date(key.expires_at)
		var today = new Date()
		return {
			id: key.key_id,
			raw: key.raw_key,
			emails: key.emails,
			expired: !key.expires_at ? true : today > expDate,
			expires: !key.expires_at ? null : expDate
		}
	})

	const dateCreated = new Date(Date.parse(githubInfo.created_at))
	const today = new Date()
	const diff = Math.abs(today - dateCreated)
	const diffYears = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365)) 
	
	return(
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<AppBar position="static" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					</Typography>
					<nav>
						<Button aria-controls="language-menu" aria-haspopup="true" onClick={handleLanguageClick}>
							{ home.sections.language } 
						</Button>
						<Menu
							id="language-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							{
								languages.map((item, index) => (
									<MenuItem 
										key={index}
										onClick={(e) => handleMenuItemClick(e, item.key)}>
										{item.name}
									</MenuItem>
								))
							}
						</Menu>
						<Button id="gpg-button" variant="button" color="textPrimary" onClick={toggleGPGModal}>
							{home.sections.gpg.name}
						</Button>
					</nav>
				</Toolbar>
			</AppBar>
			<Container component="main">
				{/* Hero unit */}
				<Dialog
					fullWidth
					open={gpgModalOpen}
					onClose={toggleGPGModal}
					className={classes.gpgDialog}
				>
					<Container className={classes.gpgDialogContent}>
						{keys.map((gpg, index) => { return <GpgKey key={index} gpg={gpg}/>})}
					</Container>
				</Dialog>
				<Container maxWidth="md" className={classes.heroContent}>
					<Avatar className={classes.avatar} src={githubInfo.avatar_url} />
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						{githubInfo.name}
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" component="p" gutterBottom>
						{home.sub}
					</Typography>
					<Typography align="center" color="textSecondary" component="p">
						{`${home.description[0]} ${diffYears} ${home.description[1]}`}
					</Typography>
				</Container>
				<Container maxWidth="md">
					<Typography variant="h3" align="center" color="textPrimary" gutterBottom>
						{home.sections.projects}
					</Typography>
					<Grid container spacing={5} className={classes.projectCards}>
						{projects.map(project => (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={project.title} xs={12} sm={project.title === 'Enterprise' ? 12 : 6} md={4}>
								<Card className={classes.cardProject}>
									<CardHeader
										title={project.title}
										subheader={project.subheader}
										titleTypographyProps={{ align: 'center', variant: 'h6' }}
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
										<Button  href={project.url} target="_blank" rel="noopener" fullWidth variant={project.buttonVariant} color="textPrimary">
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
						<Grid item xs={12} sm={3} key={home.footer.contact}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								{home.footer.contact}
							</Typography>
							<ul>
								<Link href={`mailto:${githubInfo.email}`} target="_blank" rel="noopener" color="textPrimary">
									<MailIcon className={classes.icon}/>
								</Link>
							</ul>
						</Grid>
						<Grid item xs={12} sm={9} key={home.footer.media}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								{home.footer.media}
							</Typography>
							<ul>
								<Link href={`https://${githubInfo.blog}`} target="_blank" rel="noopener" color="textPrimary">
									<LinkedInIcon className={classes.icon}/>
								</Link>
								<Link href={githubInfo.html_url} target="_blank" rel="noopener" color="textPrimary">
									<GitHubIcon className={classes.icon}/>
								</Link>
							</ul>
						</Grid>
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
	githubInfo: PropTypes.object,
	githubRepositories: PropTypes.array,
	gpgKeys: PropTypes.array,
	gpgModalOpen: PropTypes.bool,
	toggleGPGModal: PropTypes.func,
	anchorEl: PropTypes.object,
	handleLanguageClick: PropTypes.func,
	handleClose: PropTypes.func
}

export default App
