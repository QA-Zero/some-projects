import React from 'react';

import Emoji from '$cont/total/Emoji';

import '$assets/styles/game_page/board/Tile.css';


export default ({
	index,
	type,
	isNotFlagged,
	isGameContinue,
	isChecked,
	flagToggle,
	checkTile
}) => {
	const styles = {};
	if (isChecked || !isGameContinue) {
		styles.width = '50px';
		styles.height = '50px';
		styles.borderWidth = '2px';
		styles.cursor = 'default';
	}
	if (isChecked) {
		styles.backgroundColor = '#0078d7';
	}

	const handleLeftClick = () => {
		if (isGameContinue && isNotFlagged) {
			checkTile(index);
		}
	};
	const handleRightClick = e => {
		e.preventDefault();

		if (isGameContinue) {
			flagToggle(index);
		}
	};

	return (
		<div
			className="tile"
			onClick={handleLeftClick}
			onContextMenu={handleRightClick}
			style={styles}
		>
			<Emoji size={26} type={type} />
		</div>
	)
};