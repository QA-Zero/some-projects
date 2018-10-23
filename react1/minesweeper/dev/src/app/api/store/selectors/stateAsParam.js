import { getBoard } from '$utils/index';


export const getBoardTiles  = state => state.game.getIn(['tiles']);
export const getStartTime   = state => state.game.getIn(['gameParams', 'start']);
export const getMoves       = state => state.game.getIn(['gameParams', 'moves']);
export const getGameStatus  = state => state.game.getIn(['gameParams', 'status']);
export const getBoardRows   = state => getBoard(getBoardTiles(state));
export const getIsChecked   = (state, index) => getBoardTiles(state).getIn([index, 'isChecked']);
export const getTileFlagged = (state, index) => getBoardTiles(state).getIn([index, 'isFlagged']);
export const getTileEmoji   = (state, index) => {
	const tile = getBoardTiles(state).getIn([index]);

	return (
		tile.getIn(['isFlagged'])
			? (
				tile.getIn(['isMine']) && (state.game.getIn(['gameParams', 'status']) === 0)
					? 'bomb'
					: 'flag'
			)
			: (
				tile.getIn(['isMine'])
					? (
						state.game.getIn(['gameParams', 'status']) !== 0
							? 'notChecked'
							: (
								state.game.getIn(['gameParams', 'bangIndex']) === index
									? 'bang'
									: 'bomb'
							)
					)
					: (
						tile.getIn(['isChecked'])
							? `num_${state.game.getIn(['tiles', index, 'minesCount'])}`
							: 'notChecked'
					)
			)
	);
};
export const getMinesLeft = state => {
	const total = state.params.mines;
	const checked = getBoardTiles(state).reduce(
		(minesChecked, tile) => (
			tile.getIn(['isFlagged'])
				? minesChecked + 1
				: minesChecked
		),
		0
	);

	return total - checked;
};

/*
const getGameStatus = state => {
	const status = state.game.get('boardTiles').reduce(
		(tempStatus, tile) => (
			tile.get('isMine')
				? {
					  isWin: tempStatus.isWin,
					isLoose: tempStatus.isWin && tile.get('isChecked')
				}
				: {
					  isWin: tempStatus.isWin && tile.get('isChecked'),
					isLoose: tempStatus.isWin
				}
		),
		{
			isWin: true,
			isLoose: true
		}
	);

	switch(status) {
		case ( status.isWin && !status.isLoose): return 'win';
		case (!status.isWin &&  status.isLoose): return 'lose';
		case (!status.isWin && !status.isLoose): return 'playing';
		default:                                 return 'notStart';
	}
};
*/