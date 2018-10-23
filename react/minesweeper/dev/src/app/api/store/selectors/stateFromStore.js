import { initTiles } from '$utils/index';
import store from '$store/storage/index';


export const getInitTiles = () => initTiles(
	store.getState().params
);
export const getMines = () => store.getState().params.mines;


const flagsState = index => ({
	wantAdd: !store.getState().game.getIn(['tiles', index, 'isFlagged']),
	canAdd: (
		!store.getState().game.getIn(['tiles', index, 'isChecked'])
		&&
		store.getState().game.getIn(['gameParams', 'flagsLeft']) > 0
	)
});
export const getTilesFlagged = index => {
	const tiles = store.getState().game.getIn(['tiles']);
	const updateTilesFlag = (tileIndex, flagAdding) => tiles.setIn(
		[tileIndex],
		tiles.getIn([tileIndex]).setIn(
			['isFlagged'],
			flagAdding
		)
	);

	return(
		flagsState(index).wantAdd
			? (
				flagsState(index).canAdd
					? updateTilesFlag(index, true)
					: tiles
			)
			: updateTilesFlag(index, false)
	)
};
export const getFlagsLeft = tileIndex => (
	flagsState(tileIndex).wantAdd
		? (
			flagsState(tileIndex).canAdd
				? store.getState().game.getIn(['gameParams', 'flagsLeft']) - 1
				: store.getState().game.getIn(['gameParams', 'flagsLeft'])
		)
		: store.getState().game.getIn(['gameParams', 'flagsLeft']) + 1
);
export const getStatusFlagged = () => (
	(
		store.getState().game.getIn(['gameParams', 'tilesChecked'])
		===
		store.getState().game.getIn(['tiles']).toJS().length - store.getState().params.mines
	)
	&&
	(store.getState().game.getIn(['gameParams', 'flagsLeft']) - 1 === 0)
		? 1
		: store.getState().game.getIn(['gameParams', 'status'])
);


export const getTilesChecked = index => {
	const openAroundTiles = (tiles, newIndex) => {
		return (tiles.getIn([newIndex, 'aroundIndexes'])
			.reduce(
				(result, currentIndex) => (
					result.getIn([currentIndex, 'minesCount']) === 0
						? (
							openAroundTiles(
								result.removeIn([
									currentIndex,
									'aroundIndexes',
									result.getIn([currentIndex, 'aroundIndexes']).indexOf(newIndex)
								]),
								currentIndex
							)
						)
						: result
				),
				(tiles.map(
					(tile, currentIndex) => (
						tiles.getIn([newIndex, 'aroundIndexes']).indexOf(currentIndex) === -1
							? tile
							: tile.setIn(['isChecked'], true)
					)
				))
			)
		)
	};

	const currentTiles = store.getState().game.getIn(['tiles']);
	const newTiles = (
		currentTiles
			.setIn(
				[index],
				currentTiles.getIn([index]).setIn(['isChecked'], true)
			)
			.map(
				tile => (
					tile.getIn(['isMine']) && currentTiles.getIn([index, 'isMine'])
						? tile.setIn(['isChecked'], true)
						: tile
				)
			)
	);

	return (
		!newTiles.getIn([index, 'isMine']) && (newTiles.getIn([index, 'minesCount']) === 0)
			? openAroundTiles(newTiles, index)
			: newTiles
	);
};
export const getCheckedCount = () => (
	store.getState().game.getIn(['tiles'])
		.reduce(
			(sum, tile) => (
				tile.getIn(['isChecked'])
					? sum + 1
					: sum
			),
			0
		)
);
export const getStatusChecked = index => (
	store.getState().game.getIn(['tiles', index, 'isMine'])
		? 0
		: (
			(
				getCheckedCount()
				===
				store.getState().game.getIn(['tiles']).toJS().length
				-
				store.getState().params.mines
			)
			&&
			(store.getState().game.getIn(['gameParams', 'flagsLeft']) === 0)
				? 1
				: store.getState().game.getIn(['gameParams', 'status'])
		)
);
export const getMoves = index => (
	store.getState().game.getIn(['tiles', index, 'isChecked'])
		? store.getState().game.getIn(['gameParams', 'moves'])
		: store.getState().game.getIn(['gameParams', 'moves']) + 1
);
export const getBangIndex = index => (
	store.getState().game.getIn(['tiles', index, 'isMine'])
		? index
		: store.getState().game.getIn(['gameParams', 'bangIndex'])
);