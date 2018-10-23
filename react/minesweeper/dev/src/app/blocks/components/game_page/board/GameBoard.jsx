import React from 'react';

import Tile from '$cont/game_page/board/Tile';

import '$assets/styles/game_page/board/GameBoard.css';


export default ({ rows }) => {
	return (
		<div className="gameBoard">
		{
			rows.map(
				(row, index) => (
					<div key={index} className="row">
					{
						row.map(
							boardCell => (
								<Tile
									key={boardCell.tilesIndex}
									index={boardCell.tilesIndex}
								/>
							)
						)
					}
					</div>
				)
			)
		}
		</div>
	)
}