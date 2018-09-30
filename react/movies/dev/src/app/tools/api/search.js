import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';


const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

export default {
	findListByQuery: query => {
		const url = `${API_PREFIX}/search/movie`;
		const params = { query, api_key: API_KEY };
		const callback = answer =>
			camelcaseKeys(
				answer.data.results,
				{ deep: true }
			);

		return axios
			.get(url, {params})
			.then(answer => callback(answer));
	},

	findListById: id => {
		const url = `${API_PREFIX}/movie/${id}/similar?api_key=${API_KEY}`;
		const params = {};
		const callback = answer =>
			camelcaseKeys(
				answer.data.results,
				{ deep: true }
			);

		return axios
			.get(url, {params})
			.then(answer => callback(answer));
	},

	findSingleById: id => {
		const url = `${API_PREFIX}/movie/${id}`;
		const params = { api_key: API_KEY };
		const callback = answer =>
			camelcaseKeys(
				answer.data,
				{ deep: true }
			);

		return axios
			.get(url, {params})
			.then(answer => callback(answer));
	},

	findListRec: () => {
		const url = `${API_PREFIX}/movie/popular?api_key=${API_KEY}`;
		const params = {};
		const callback = answer =>
			camelcaseKeys(
				answer.data.results,
				{ deep: true }
			);

		return axios
			.get(url, {params})
			.then(answer => callback(answer));
	}
};