import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import '$a/styles#/search/SearchBox.css';


class SearchBox extends Component {
	handleTextChange = e => {
		this.setState({
			userRequest: e.target.value
		});
	};
	handleKeyDown = e => {
		if (e.keyCode === 13) {
			this.handleSearch();
		}
	};
	handleSearch = () => {
		const { saveSearchInfo, push } = this.props;
		const { userRequest } = this.state;
		const searchUrl = this.getUrlByRequest(userRequest);

		saveSearchInfo(userRequest, searchUrl);
		push(searchUrl);
	};

	getUrlByRequest = req => {
		const getQueryByRequest = req => {
			return '?name=' + encodeURIComponent(req);
		};

		return this.props.urlBase + getQueryByRequest(req);
	};
	getReqFromUrlQuery = urlQuery => {
		const getUrlParam = (urlQuery, paramName) => {
			let result = '';

			if (urlQuery) {
				const query = urlQuery.substring(1);
				const blocks = query.split('&');

				for (const block of blocks) {
					const pair = block.split('=');

					if (pair[0] === paramName) {
						result = decodeURIComponent(pair[1]);
						break;
					}
				}
			}

			return result;
		};

		return getUrlParam(urlQuery, 'name');
	};

	constructor(props) {
		super(props);

		const { urlQuery, urlFull, saveSearchInfo } = this.props;
		const userRequest = this.getReqFromUrlQuery(urlQuery);

		this.state = {
			userRequest: userRequest
		};

		saveSearchInfo(userRequest, urlFull);
	}

	componentDidMount() {
		this.searchField.focus();
	}

	render() {
		const { userRequest } = this.state;

		return (
			<Paper className="sb-wrapper">
				<div className="search-box">
					<TextField
						fullWidth
						className="field"
						helperText="Search"
						value={userRequest}
						inputRef={el => this.searchField = el}
						onChange={this.handleTextChange}
						onKeyDown={this.handleKeyDown}
					/>
					<Button
						className="searchBtn"
						disabled={!userRequest}
						onClick={this.handleSearch}
					>Search</Button>
				</div>
			</Paper>
		);
	}
}


export default SearchBox;