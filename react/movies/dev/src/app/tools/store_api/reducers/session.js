import {
	AUTH_SUCCESS,
	AUTH_REQUEST,
	AUTH_FAILURE
} from "../../const/actionTypes";


const session = (
	state = {
		isLoggedIn: false,
		error: null,
		isLogging: false
	},
	action
) => {
	switch (action.type) {
		case AUTH_REQUEST: {
			return {
				...state,
				error: null,
				isLogging: true
			};
		}
		case AUTH_SUCCESS: {
			return {
				...state,
				isLoggedIn: true,
				isLogging: false
			};
		}
		case AUTH_FAILURE: {
			return {
				...state,
				isLoggedIn: false,
				error: action.error,
				isLogging: false
			};
		}
		default: {
			return state
		}
	}
};


export default session;