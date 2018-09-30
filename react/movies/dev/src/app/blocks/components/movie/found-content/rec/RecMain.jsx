import React, { Component } from 'react';

import Loader from '$a/cont#/total/Loader.js';
import RecGrid from '$a/cont#/movie/found-content/rec/RecGrid.js';

import '$a/styles#/movie/found-content/rec/RecMain.css';


class RecMain extends Component {
	componentDidMount() {
		this.props.saveMoviesRec();
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
				<RecGrid />
			</Loader>
		)
	}
}


export default RecMain;