import React from 'react';

import SimilarCard from '$a/cont#/movie/found-content/similar/SimilarCard.js';

import '$a/styles#/movie/found-content/similar/SimilarGrid.css';


const SimilarGrid = ({ movies }) => {
	return (
		<div className="similar-grid">
			{
				movies.length === 0
					? <p>No movies to display</p>
					: movies.map(movie =>
						<SimilarCard
							key={movie.id}
							{...movie}
						/>
					)
			}
		</div>
	);
};


export default SimilarGrid;