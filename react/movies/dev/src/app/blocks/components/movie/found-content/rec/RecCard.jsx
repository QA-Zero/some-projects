import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import '$a/styles#/movie/found-content/rec/RecCard.css';


const RecCard = ({ mainImg, title, descr, id }) => {
	return (
		<Paper className="rec-card">
			<img src={mainImg} alt="" />
			<div className="info">
				<div>
					<h1 className="title">{title}</h1>
					<p className="overview">{descr}</p>
				</div>

				<div>
					<Divider />
					<div className="actions">
						<Link to={`/movie/${id}`}>
							<Button
								className="btn"
								variant="contained"
								color="primary"
							>More info</Button>
						</Link>
					</div>
				</div>
			</div>
		</Paper>
	);
};


export default RecCard;