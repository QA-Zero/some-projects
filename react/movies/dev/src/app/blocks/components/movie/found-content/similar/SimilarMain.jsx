import React, { Component } from 'react';

import Loader from '$a/cont#/total/Loader.js';
import SimilarGrid from '$a/cont#/movie/found-content/similar/SimilarGrid.js';

import '$a/styles#/movie/found-content/similar/SimilarMain.css';


class SimilarMain extends Component {
	componentDidMount() {
		const { saveMoviesSimilar, id } = this.props;
		saveMoviesSimilar(id);
	}

	render() {
		const { count, voteAverage } = this.props;
		const style = {
			count: {
				marginTop: '5px',
				marginBottom: '-10px'
			},
			vote: {
				marginTop: '10px',
				marginBottom: '-10px'
			}
		};

		return (
			<Loader
				style={style}
				count={count}
				vote={voteAverage}
			>
				<SimilarGrid />
			</Loader>
		)
	}
}


export default SimilarMain;