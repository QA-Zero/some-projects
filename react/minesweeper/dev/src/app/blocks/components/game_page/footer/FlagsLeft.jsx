import React from 'react';

import '$assets/styles/game_page/footer/MinesLeft.css';


export default ({ minesLeft }) => (
	<div className="minesLeft">
		<span className="number">{minesLeft}</span>
		<span className="text">flags left</span>
	</div>
);