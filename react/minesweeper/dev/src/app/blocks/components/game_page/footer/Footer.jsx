import React from 'react';

import FlagsLeft from '$cont/game_page/footer/FlagsLeft';
import MovesCount from '$cont/game_page/footer/MovesCount';
import GameTimer from '$cont/game_page/footer/GameTimer';

import '$assets/styles/game_page/footer/Footer.css';


export default () => (
	<div className="footer">
		<FlagsLeft />
		<MovesCount />
		<GameTimer />
	</div>
);