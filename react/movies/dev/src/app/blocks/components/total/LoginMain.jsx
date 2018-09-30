import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import LoginStatus from '$a/cont#/total/LoginStatus.js';

import '$a/styles#/total/LoginMain.css';


class LoginMain extends Component {
	state = {
		login: '',
		password: '',
		showStatus: false
	};

	handleLoginChange = e => {
		this.setState({
			login: e.target.value,
			showStatus: false
		});
	};
	handlePasswordChange = e => {
		this.setState({
			password: e.target.value,
			showStatus: false
		});
	};
	handleKeyDown = e => {
		if (e.keyCode === 13) {
			this.handleLogin();
		}
	};
	handleLogin = () => {
		this.props.auth(
			this.state.login,
			this.state.password
		);
		this.setState({
			showStatus: true
		});
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		const { replace, lastPath } = this.props;

		if (nextProps.isLoggedIn) {
			replace(lastPath);
		}

		return true;
	}

	render() {
		return (
			<div className="container">
				<Card className="card form">
					<h2>Log in</h2>

					<TextField
						className="authLogin"
						fullWidth
						label="Login"
						value={this.state.login}
						type="text"
						onChange={this.handleLoginChange}
						onKeyDown={this.handleKeyDown}
					/>

					<TextField
						className="authPass"
						fullWidth
						label="Password"
						value={this.state.password}
						type="password"
						onChange={this.handlePasswordChange}
						onKeyDown={this.handleKeyDown}
					/>

					{
						this.state.showStatus
							? <LoginStatus/>
							: ''
					}

					<Button
						className="authBtn"
						onClick={this.handleLogin}
					>Log in</Button>
				</Card>
			</div>
		);
	}
}


export default LoginMain;