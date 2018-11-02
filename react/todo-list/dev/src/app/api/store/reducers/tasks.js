import { INIT_CURRENT_LIST } from '$const/actionTypes';


export default (state = [], action = {}) => {
	switch (action.type) {
		case INIT_CURRENT_LIST: {
			return action.tasks;
		}

		default: {
			return state;
		}
	}
};