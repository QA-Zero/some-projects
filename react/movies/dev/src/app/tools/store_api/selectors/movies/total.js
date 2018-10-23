import { createSelector } from 'reselect';
import { movies } from '../index.js';


const getVotesInfo = data => createSelector(
	data,
	(movies, count) => {
		let average = 0;
		let notVoted = 0;

		if (count !== 0) {
			const getRound = (value, numDigit) => {
				const rounder = Math.pow(10, numDigit);
				return Math.round(value * rounder) / rounder;
			};
			const result = movies.reduce(
				(sum, movie) => {
					if (movie.voteAverage > 0) {
						return sum + movie.voteAverage
					}
					else {
						notVoted++;
						return sum;
					}
				},
				0
			);
			average = getRound(
				result / (count - notVoted),
				2
			);
		}

		return { average, notVoted };
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

export const getVotesSearch  = getVotesInfo([getSearchItems, getSearchCount]);
export const getVotesSimilar = getVotesInfo([getSimilarItems, getSimilarCount]);
export const getVotesRec     = getVotesInfo([getRecItems, getRecCount]);