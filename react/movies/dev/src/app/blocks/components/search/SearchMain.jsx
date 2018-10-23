import React, { Component } from 'react';
import { ScrollContext } from 'react-router-scroll-4';

import SearchBox from '$a/cont#/search/SearchBox.js';
import Loader from '$a/cont#/total/Loader.js';
import SearchGrid from '$a/cont#/search/SearchGrid.js';

import '$a/styles#/search/SearchMain.css';


class SearchMain extends Component {
	state = {
		height: { height: 20000 },
		notScrolled: true
	};

	updateScroll = isLoading => {
		if (this.state.notScrolled && isLoading) {
			this.setState({
				height: {
					height: 'auto'
				},
				notScrolled: false
			});
		}
	};

	componentDidMount() {
		const { userRequest, saveMoviesSearch, isLoading } = this.props;

		if (userRequest) {
			saveMoviesSearch(userRequest);
		}

		this.updateScroll(isLoading);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		(function updateQuery(self) {
			const { userRequest, saveMoviesSearch } = self.props;

			if (nextProps.userRequest !== userRequest) {
				saveMoviesSearch(nextProps.userRequest);
			}
		})(this);

		this.updateScroll(nextProps.isLoading);

		return true;
	}

	render() {
		const { scroll, count, votesInfo } = this.props;
		const { height } = this.state;
		const scrollParams = {
			history: {},
			location: {},
			shouldUpdateScroll: (
				() => [0, scroll]
			)
		};
		const loaderParams = {
			style: {
				count: {
					marginTop: '107px',
					marginBottom: '-105px'
				},
				vote: {
					marginTop: '105px',
					marginBottom: '-105px'
				}
			},
			count,
			votes: votesInfo
		};

		return (
			<ScrollContext {...scrollParams} >
				<div
					className="searchPage"
					style={height}
				>
					<SearchBox />
					<Loader {...loaderParams} >
						<SearchGrid />
					</Loader>
				</div>
			</ScrollContext>
		);
	}
}


export default SearchMain;