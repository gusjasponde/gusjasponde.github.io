import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import LayersIcon from '@material-ui/icons/Layers'

let mainListItems = (setPage) => {
	return (
		<div>
			<ListItem button >
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="About Me" />
			</ListItem>
			<ListItem button >
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary="Projects" />
			</ListItem>
		</div>
	)
}

mainListItems.propTypes = {
	setPage: PropTypes.func
}

export default mainListItems