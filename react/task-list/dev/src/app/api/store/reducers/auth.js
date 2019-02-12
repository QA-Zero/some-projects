import { LOGIN, LOGOUT } from '$const/actionTypes';

export default (
	state  = { isAdmin: false },
	action = {}
) => {
	switch (action.type) {
        case LOGIN: return { isAdmin: true };
        case LOGOUT: return { isAdmin: false };

		default: return state;
	}
};
