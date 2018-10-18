import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import '$assets/styles/Loader.css';


export default () => (
	<div className="spinner-wrapper">
		<CircularProgress className="spinner"/>
	</div>
);