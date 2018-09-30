import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import '$a/styles#/search/SearchCard.css';


const SearchCard = ({ mainImg, title, descr, id, saveScroll }) => {
	const handleClick = () => {
		saveScroll(
			window.pageYOffset
			||
			document.documentElement.scrollTop
			||
			document.body.scrollTop
		);
	};

	return (
		<Paper className="search-card">
			<img src={mainImg} alt="" />
			<div className="info">
				<div>
					<h1 className="title">{title}</h1>
					<p className="overview">{descr}</p>
				</div>

				<div>
					<Divider />
					<div className="actions">
						<Link to={`movie/${id}`}>
							<Button
								className="btn"
								variant="contained"
								color="primary"
								onClick={handleClick}
							>More info</Button>
						</Link>
					</div>
				</div>
			</div>
		</Paper>
	);
};


export default SearchCard;