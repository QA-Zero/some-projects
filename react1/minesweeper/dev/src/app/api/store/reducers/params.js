import { INIT_BOARD_PARAMS } from '$const/actionTypes';
import { defaultValues } from '$const/boardParams';


export default (
	state = defaultValues,
	action = {}
) => {
	switch (action.type) {
		case INIT_BOARD_PARAMS: {
			return action.params;
		}

		default: {
			return state;
		}
	}
};