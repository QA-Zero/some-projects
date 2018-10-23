import React from 'react';

import emoji from '$const/emoji';
import Emoji from '$cont/total/Emoji';

import '$assets/styles/game_page/header/Header.css';


export default ({ status }) => {
	const styles = {};
	if (status === 0) {
		styles.color = '#f00';
	}
	if (status === 1) {
		styles.color = '#383';
	}

	return (
		<div className="header">
			<Emoji styles={15} type={status} />
			<span className="title" style={styles}>{emoji[status].name}</span>
		</div>
	)
};