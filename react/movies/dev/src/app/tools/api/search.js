import axios from 'axios';


const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

export default {
	findSingleById: id => {
		const url = `${API_PREFIX}/movie/${id}`;
		const params = { api_key: API_KEY };

		return axios
			.get(url, {params})
			.then(answer => answer.data);
	},

	findListById: id => {
		const url = `${API_PREFIX}/movie/${id}/similar?api_key=${API_KEY}`;
		const params = {};

		return axios
			.get(url, {params})
			.then(answer => answer.data.results);
	},

	findListByQuery: query => {
		const url = `${API_PREFIX}/search/movie`;
		const params = { query, api_key: API_KEY };

		return axios
			.get(url, {params})
			.then(answer => answer.data.results);
	},

	findListRec: () => {
		const url = `${API_PREFIX}/movie/popular?api_key=${API_KEY}`;
		const params = {};

		return axios
			.get(url, {params})
			.then(answer => answer.data.results);
	}
};