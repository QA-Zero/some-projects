import React, { Component, Fragment } from 'react';
import Pagination from 'react-js-pagination';

import Loader from './Loader';
import UsersList from './UsersList';

import '$assets/styles/UsersPage.css';


const PER_PAGE = 5;

export default class UserPage extends Component {
	getUsersList = activePage => {
		const users = this.props.users;

		const firstIndex = PER_PAGE * (activePage - 1);
		let lastIndex    = PER_PAGE *  activePage - 1;

		if (lastIndex > users.length) {
			lastIndex = users.length -1;
		}

		return users.slice(firstIndex, lastIndex + 1);

	};
	handlePageChange = pageNumber => {
		this.setState({
			activePage: pageNumber,
			 usersList: this.getUsersList(pageNumber)
		});
		this.props.savePageNumber(pageNumber);
	};


	constructor(props) {
		super(props);

		this.state = {
			activePage: parseInt(props.pageNumber, 10),
			 usersList: []
		};
	}

	componentDidMount() {
		if (this.props.users.length) {
			if (!this.state.usersList.length) {
				this.setState({
					usersList: this.getUsersList(this.state.activePage)
				});
			}
		}
		else {
			this.props.saveUsers();
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.users.length) {
			if (!this.state.usersList.length) {
				this.setState({
					usersList: this.getUsersList(this.state.activePage)
				});
			}
		}
	}

	render() {
		const { users } = this.props;

		return (
			<Fragment>
				{
					users.length
						? (
							<Fragment>
								<UsersList usersList={this.state.usersList} />
								<Pagination
									hideDisabled
									activePage={this.state.activePage}
									itemsCountPerPage={PER_PAGE}
									totalItemsCount={users.length}
									pageRangeDisplayed={3}
									onChange={this.handlePageChange}
								/>
							</Fragment>
						)
						: (
							<Fragment>
								<Loader />
								<Pagination
									activePage={this.state.activePage}
									itemsCountPerPage={PER_PAGE}
									totalItemsCount={users.length}
									pageRangeDisplayed={3}
									onChange={this.handlePageChange}
								/>
							</Fragment>
						)
				}

			</Fragment>
		);
	}
}