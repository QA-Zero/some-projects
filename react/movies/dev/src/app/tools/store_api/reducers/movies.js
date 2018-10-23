import {
	SEARCH_MOVIES_REQUEST,
	SEARCH_MOVIES_SUCCESS,
	CURRENT_MOVIE_REQUEST,
	CURRENT_MOVIE_SUCCESS,
	SIMILAR_MOVIES_REQUEST,
	SIMILAR_MOVIES_SUCCESS,
	REC_MOVIES_REQUEST,
	REC_MOVIES_SUCCESS
} from '../../const/actionTypes.js';


const movies = (
	state = {
		loading: false,
		current: {},
		search: [],
		similar: [],
		rec: []
	},
	action
) => {
	switch (action.type) {
		case CURRENT_MOVIE_REQUEST: {
			return {
				...state,
				loading: false
			};
		}
		case CURRENT_MOVIE_SUCCESS: {
			return {
				...state,
				loading: true,
				current: action.item
			};
		}


		case SEARCH_MOVIES_REQUEST: {
			return {
				...state,
				loading: false
			};
		}
		case SEARCH_MOVIES_SUCCESS: {
			return {
				...state,
				loading: true,
				search: action.items
			};
		}


		case SIMILAR_MOVIES_REQUEST: {
			return {
				...state,
				loading: false
			};
		}
		case SIMILAR_MOVIES_SUCCESS: {
			return {
				...state,
				loading: true,
				similar: action.items
			};
		}


		case REC_MOVIES_REQUEST: {
			return {
				...state,
				loading: false
			};
		}
		case REC_MOVIES_SUCCESS: {
			return {
				...state,
				loading: true,
				rec: action.items
			};
		}


		default: {
			return state
		}
	}
};


export default movies;