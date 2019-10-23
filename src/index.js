import React from 'react'
import { render } from 'react-dom'
import Button from '@material-ui/core/Button';

render(
	<Button variant="contained" color="primary">
		Hello world
	</Button>
	,
	document.getElementById('app')
)