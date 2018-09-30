import { createSelector } from 'reselect';
import { movies } from '../index.js';


const getVoteAverage = data => createSelector(
	data,
	(movies, count) => {
		if (count === 0) {
			return 0;
		}
		else {
			const getRound = (value, numDigit) => {
				const rounder = Math.pow(10, numDigit);
				return Math.round(value * rounder) / rounder;
			};
			const result = movies.reduce(
				(sum, movie) => {
					return sum + movie.voteAverage
				},
				0
			);

			return getRound(result / count, 2);
		}
	}
);


export const getLoading = state => movies(state).loading;

export const currentItem     = state => movies(state).current;
export const getSearchItems  = state => movies(state).search;
export const getSimilarItems = state => movies(state).similar;
export const getRecItems     = state => movies(state).rec;

export const getSearchCount  = state => getSearchItems(state).length;
export const getSimilarCount = state => getSimilarItems(state).length;
export const getRecCount     = state => getRecItems(state).length;

export const getSearchVoteAverage  = getVoteAverage([getSearchItems, getSearchCount]);
export const getSimilarVoteAverage = getVoteAverage([getSimilarItems, getSimilarCount]);
export const getRecVoteAverage     = getVoteAverage([getRecItems], getRecCount);