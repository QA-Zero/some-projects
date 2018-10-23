import React, { Component } from 'react';

import '$assets/styles/game_page/footer/GameTimer.css';


export default class GameTimer extends Component {
	updateTimer = () => {
		if (!this.timer) {
			this.timer = setInterval(
				() => {
					if (this.props.isGameContinue) {
						this.forceUpdate()
					}
					else {
						clearInterval(this.timer);
						delete this.timer;
					}
				},
				500
			);
		}
	};


	componentDidMount() {
		this.updateTimer();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateTimer();
	}

	render() {
		const currentTime = Math.round(
			(Date.now() - this.props.startTime) / 1000
		);

		return (
			<div className="timer">
				<span className="number">{currentTime}</span>
				<span className="text">seconds passed</span>
			</div>
		);
	}
}