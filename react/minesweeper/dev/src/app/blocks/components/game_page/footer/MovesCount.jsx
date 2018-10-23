import React from 'react';

import '$assets/styles/game_page/footer/MovesCount.css';


export default ({ moves }) => (
	<div className="movesCount">
		<span className="number">{moves}</span>
		<span className="text">moves</span>
	</div>
);