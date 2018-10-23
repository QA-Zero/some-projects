import React, { Component } from 'react';

import BackdropContainer from '$a/cont#/movie/found-content/current/BackdropContainer.js';
import MovieInfo from '$a/cont#/movie/found-content/current/MovieInfo.js';
import Loader from '$a/cont#/total/Loader.js';

import '$a/styles#/movie/found-content/current/CurrentMain.css';


class CurrentMain extends Component {
	componentDidMount() {
		const { saveMovieCurrent, id } = this.props;
		saveMovieCurrent(id);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextProps.id !== this.props.id) {
			this.props.saveMovieCurrent(nextProps.id);
		}

		return true;
	}

	render() {
		const loaderParams = {
			style: {
				vote: {},
				count: {}
			},
			count: 0,
			votes: {
				average: 0,
				notVoted: 0
			}
		};

		return (
			<Loader {...loaderParams} >
				<BackdropContainer>
					<MovieInfo />
				</BackdropContainer>
			</Loader>
		);
	}
}


export default CurrentMain;