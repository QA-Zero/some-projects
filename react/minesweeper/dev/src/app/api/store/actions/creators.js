import {
	INIT_BOARD_PARAMS,
	START_GAME,
	TOGGLE_FLAG,
	CHECK_TILE,
	UPDATE_CHECKED_TILES
} from '$const/actionTypes';
import {
	getInitTiles,
	getMines,
	getTilesFlagged,
	getFlagsLeft,
	getStatusFlagged,
	getTilesChecked,
	getBangIndex,
	getCheckedCount,
	getMoves,
	getStatusChecked
} from '$store/selectors/stateFromStore';


export default {
	initBoardParams: boardParams => ({
		  type: INIT_BOARD_PARAMS,
		params: {...boardParams}
	}),


	startGame: () => ({
		     type: START_GAME,
		    tiles: getInitTiles(),
		flagsLeft: getMines()
	}),
	flagToggle: tileIndex => ({
		     type: TOGGLE_FLAG,
		    tiles: getTilesFlagged(tileIndex),
		flagsLeft: getFlagsLeft(tileIndex),
		   status: getStatusFlagged(),
	}),
	checkTile: tileIndex => ({
		        type: CHECK_TILE,
		       tiles: getTilesChecked(tileIndex),
		   bangIndex: getBangIndex(tileIndex),
		       moves: getMoves(tileIndex)
	}),
	updateCheckedTiles: tileIndex => ({
		        type: UPDATE_CHECKED_TILES,
		tilesChecked: getCheckedCount(),
		      status: getStatusChecked(tileIndex)
	})
};