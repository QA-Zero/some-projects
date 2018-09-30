import React from 'react';

import RecCard from '$a/cont#/movie/found-content/rec/RecCard.js';

import '$a/styles#/movie/found-content/rec/RecGrid.css';


const RecGrid = ({ movies }) => (
	<div className="rec-grid">
		{
			movies.length === 0
				? <p>No movies to display</p>
				: movies.map(movie =>
					<RecCard
						key={movie.id}
						{...movie}
					/>
				)
		}
	</div>
);


export default RecGrid;