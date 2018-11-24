import {
    START_NEW_GAME,
	UPDATE_CELLS,
    START_ANIMATION,
    FINISH_ANIMATION
} from '$const/actionTypes';


export default (
	state  = {
		      cells: [],
		 emptyIndex: -1,
		   isGaming: true,
        isAnimation: false
	},
	action = {}
) => {
	switch (action.type) {
        case START_NEW_GAME: {
            return {
                      cells: [],
                 emptyIndex: -1,
                   isGaming: true,
                isAnimation: false
            };
        }
        case UPDATE_CELLS: {
            return {
				...state,
				     cells: action.cells,
                emptyIndex: action.emptyIndex
			};
        }
        case START_ANIMATION: {
            return {
                ...state,
                isAnimation: true
            };
        }
        case FINISH_ANIMATION: {
            return {
                ...state,
                isAnimation: false,
                   isGaming: action.isGaming
            };
        }

		default: {
			return state;
		}
	}
};