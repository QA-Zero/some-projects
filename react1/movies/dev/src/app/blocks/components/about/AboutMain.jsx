import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import '$a/styles#/about/AboutMain.css';


const AboutMain = () => (
	<div className="aboutContainer">
		<div className="title">About page</div>

		<Link to={'/search'}>
			<Button
				variant="contained"
				color="primary"
			>To search</Button>
		</Link>
	</div>
);


export default AboutMain;