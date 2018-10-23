import {
	START_GAME,
	TOGGLE_FLAG,
	CHECK_TILE,
	UPDATE_CHECKED_TILES
} from '$const/actionTypes';
import { fromJS } from 'immutable';


export default (
	state = fromJS({
		     tiles: [],
		gameParams: {
			tilesChecked: 0,
			       moves: 0,
			   flagsLeft: 0,
				   start: 0,
			      status: -1,
			   bangIndex: -1,
		}
	}),
	action = {}
) => {
	switch (action.type) {
		case START_GAME: {
			return (
				state
					.setIn(['tiles'], action.tiles)
					.setIn(['gameParams', 'flagsLeft'], action.flagsLeft)
					.setIn(['gameParams', 'start'], Date.now())
					.setIn(['gameParams', 'tilesChecked'], 0)
					.setIn(['gameParams', 'moves'], 0)
					.setIn(['gameParams', 'bangIndex'], -1)
					.setIn(['gameParams', 'status'], -1)
			);
		}
		case TOGGLE_FLAG: {
			return (
				state
					.setIn(['tiles'], action.tiles)
					.setIn(['gameParams', 'flagsLeft'], action.flagsLeft)
					.setIn(['gameParams', 'status'], action.status)
			);
		}
		case CHECK_TILE: {
			return (
				state
					.setIn(['tiles'], action.tiles)
					.setIn(['gameParams', 'moves'], action.moves)
					.setIn(['gameParams', 'bangIndex'], action.bangIndex)
			);
		}
		case UPDATE_CHECKED_TILES: {
			return (
				state
					.setIn(['gameParams', 'tilesChecked'], action.tilesChecked)
					.setIn(['gameParams', 'status'], action.status)
			);
		}

		default: {
			return state;
		}
	}
};