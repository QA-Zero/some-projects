import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Header from '$cont/game_page/header/Header';
import GameBoard from '$cont/game_page/board/GameBoard';
import Footer from '$cont/game_page/footer/Footer';

import '$assets/styles/game_page/GamePage.css';


export default class GamePage extends Component {
	handleRestart = () => {
		this.props.startGame();
	};
	handleNewParams = () => {
		this.props.push('/start');
	};


	componentDidMount() {
		this.props.startGame();
	}
	render() {
		return (
			<div className="gamePage">
				<div className="rules">Mark mines and open other tiles</div>
				<div className="game">
					<Header />
					<GameBoard />
					<Footer />
				</div>
				<div className="controls">
					<Button
						className="restartBtn"
						onClick={this.handleRestart}
					>Restart</Button>
					<Button
						className="newParamsBtn"
						onClick={this.handleNewParams}
					>New params</Button>
				</div>
			</div>
		);
	}
}