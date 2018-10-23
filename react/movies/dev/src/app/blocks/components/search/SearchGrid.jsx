import React from 'react';

import SearchCard from '$a/cont#/search/SearchCard.js';

import '$a/styles#/search/SearchGrid.css';


const SearchGrid = ({ movies }) => {
	return (
		<div className="search-grid">
			{
				movies.length === 0
					? <p>No movies to display</p>
					: movies.map(movie =>
						<SearchCard
							key={movie.id}
							{...movie}
						/>
					)
			}
		</div>
	);
};


export default SearchGrid;