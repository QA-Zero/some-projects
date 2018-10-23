import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import '$a/styles#/total/NotFound.css';


const NotFound = () => (
	<div className="notFoundContainer">
		<div className="title">Not found!</div>

		<Link to={'/search'}>
			<Button
				variant="contained"
				color="primary"
			>To search</Button>
		</Link>
	</div>
);


export default NotFound;