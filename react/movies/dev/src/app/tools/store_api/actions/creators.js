import {
	SEARCH_MOVIE_BY_USER,
	LEAVE_SEARCH_PAGE,
	LEAVE_PAGE_FOR_AUTH,

	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_FAILURE,

	SEARCH_MOVIES_REQUEST,
	SEARCH_MOVIES_SUCCESS,
	CURRENT_MOVIE_REQUEST,
	CURRENT_MOVIE_SUCCESS,
	SIMILAR_MOVIES_REQUEST,
	SIMILAR_MOVIES_SUCCESS,
	REC_MOVIES_REQUEST,
	REC_MOVIES_SUCCESS
} from '../../const/actionTypes.js';


const basePref = 'https://image.tmdb.org/t/p/';
const addInfo = {
	posterPref: basePref + 'w500',
	bdPref: basePref + 'original',
	noPoster: '/img/no-poster.jpg'
};
const getList = items => {
	const result = [];

	for (let item of items) {
		result.push({
			         id: item['id'],
			      title: item['title'],
			      descr: item['overview'],
			voteAverage: item['voteAverage'],
			    mainImg: item['posterPath']
							? addInfo.posterPref + item['posterPath']
							: addInfo.noPoster
		});
	}

	return result;
};
const getSingle = item => ({
	  title: item['title'],
	  descr: item['overview'],
	mainImg: item['posterPath']
				? addInfo.posterPref + item['posterPath']
				: addInfo.noPoster,
	  bdImg: item['backdropPath']
				? addInfo.bdPref + item['backdropPath']
				: addInfo.noPoster
});

const creators = {
	setSearchInfo: (userRequest, searchUrl) => ({
		type: SEARCH_MOVIE_BY_USER,
		userRequest,
		searchUrl
	}),
	setScroll: scroll => ({
		type: LEAVE_SEARCH_PAGE,
		scroll
	}),
	setPath: lastPath => ({
		type: LEAVE_PAGE_FOR_AUTH,
		lastPath
	}),


	authRequest: () => ({
		type: AUTH_REQUEST
	}),
	authSuccess: data => ({
		type: AUTH_SUCCESS,
		user: data.user,
		token: data.token
	}),
	authFailure: error => ({
		type: AUTH_FAILURE,
		error: error
	}),


	fetchCurrentRequest: () => ({
		type: CURRENT_MOVIE_REQUEST
	}),
	fetchCurrentSuccess: item => ({
		type: CURRENT_MOVIE_SUCCESS,
		item: getSingle(item)
	}),
	fetchSearchRequest: () => ({
		type: SEARCH_MOVIES_REQUEST
	}),
	fetchSearchSuccess: items => ({
		type: SEARCH_MOVIES_SUCCESS,
		items: getList(items)
	}),
	fetchSimilarRequest: () => ({
		type: SIMILAR_MOVIES_REQUEST
	}),
	fetchSimilarSuccess: items => ({
		type: SIMILAR_MOVIES_SUCCESS,
		items: getList(items)
	}),
	fetchRecRequest: () => ({
		type: REC_MOVIES_REQUEST
	}),
	fetchRecSuccess: items => ({
		type: REC_MOVIES_SUCCESS,
		items: getList(items)
	})
};


export default creators;