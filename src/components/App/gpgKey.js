import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import GetAppIcon from '@material-ui/icons/GetApp'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import BlockIcon from '@material-ui/icons/Block'
import TextField from '@material-ui/core/TextField'
import { green, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
	card: {
		border: `2px solid ${theme.palette.text.divider}`,
		margin: theme.spacing(2)
	},
	'MuiFormControl-root': {
		display: 'none'
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
}))

let GpgKey = ({ gpg }) => {
	const { t } = useTranslation()
	let text = t('home.sections.gpg')

	const classes = useStyles()

	const textAreaRef = React.useRef(null)
	function copyToClipboard(e) {
		textAreaRef.current.select()
		document.execCommand('copy')
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus()
	}

	return (
		<Card className={classes.card}>
			<CardHeader
				title={
					<div style={{ display: 'flex' }}>
						<Typography variant='h6'>
							{`${gpg.id} : <${gpg.emails[0].email}> ${gpg.expired ? text.expired : ''}`}
						</Typography>
						{ gpg.expired ? <BlockIcon style={{ color: red[400] }}/> : <CheckCircleIcon style={{ color: green[400] }}/> }
					</div>
				}
				titleTypographyProps={{ align: 'center', variant: 'h6' }}
				subheaderTypographyProps={{ align: 'center' }}
				className={classes.cardHeader}
			/>
			<CardActions>
				<Button fullWidth  color="textPrimary" id="copy-gpg-key" style={{ margin: '10px'}} onClick={copyToClipboard}>
					<Typography variant='textSecondary'>{text.copy}</Typography>
					<FileCopyIcon style={{ marginLeft: '12px'}}/>
				</Button>
				<Button fullWidth color="textPrimary" id="download-gpg-key" style={{ margin: '10px'}}>
					<Typography variant='textSecondary'>{text.download}</Typography>
					<GetAppIcon style={{ marginLeft: '12px'}}/>
				</Button>
			</CardActions>
			<CardContent>
				<TextField
					inputProps={{
						style: {fontSize: 11, textAlign: 'center'} 
					}}
					fullWidth={true}
					multiline={true}
					inputRef={textAreaRef}
					value={gpg.raw}
				/>
			</CardContent>
		</Card>
	)
}


GpgKey.propTypes = {
	gpg: PropTypes.object
}

export default GpgKey