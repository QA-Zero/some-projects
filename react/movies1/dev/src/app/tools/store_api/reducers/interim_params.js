import {
	SEARCH_MOVIE_BY_USER,
	LEAVE_SEARCH_PAGE,
	LEAVE_PAGE_FOR_AUTH
} from '../../const/actionTypes.js';


const interim_params = (
	state = {
		searchPage: {
			scroll: 0,
			userRequest: '',
			searchUrl: ''
		},
		auth: {
			lastPath: '/'
		}
	},
	action
) => {
	switch(action.type) {
		case SEARCH_MOVIE_BY_USER: {
			return {
				...state,
				searchPage: {
					...state.searchPage,
					userRequest: action.userRequest,
					searchUrl: action.searchUrl
				}
			}
		}
		case LEAVE_SEARCH_PAGE: {
			return {
				...state,
				searchPage: {
					...state.searchPage,
					scroll: action.scroll
				}
			}
		}
		case LEAVE_PAGE_FOR_AUTH: {
			return {
				...state,
				auth : {
					...state.auth,
					lastPath: action.lastPath
				}
			}
		}

		default: {
			return state;
		}
	}
};


export default interim_params;