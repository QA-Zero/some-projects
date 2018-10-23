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
		const { count, votesInfo } = this.props;
		const loaderParams = {
			style: {
				count: {
					marginTop: '5px',
					marginBottom: '-10px'
				},
				vote: {
					marginTop: '10px',
					marginBottom: '-10px'
				}
			},
			count,
			votes: votesInfo
		};

		return (
			<Loader {...loaderParams} >
				<SimilarGrid />
			</Loader>
		)
	}
}


export default SimilarMain;