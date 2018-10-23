import { RECEIVE_USERS } from '$const/actionTypes';


export default (state = [], action = {}) => {
	switch (action.type) {
		case RECEIVE_USERS: {
			return action.users;
		}

		default: {
			return state;
		}
	}
};