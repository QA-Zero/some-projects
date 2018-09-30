import React from 'react';

import Paper from '@material-ui/core/Paper';

import '$a/styles#/movie/found-content/current/MovieInfo.css';


const MovieInfo = ({ title, descr, mainImg }) => (
	<Paper className="movieInfo">
		<img src={mainImg} alt="" />
		<div className="info">
			<h1 className="title">{title}</h1>
			<p>{descr}</p>
		</div>
	</Paper>
);


export default MovieInfo;