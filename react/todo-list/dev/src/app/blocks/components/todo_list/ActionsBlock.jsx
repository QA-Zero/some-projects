import React, { Component, createRef } from 'react';

import Button from '@material-ui/core/Button';

import '$assets/styles/ActionsBlock.css';


export default class ActionsBlock extends Component {
	addNewTaskHandle = () => {
		this.props.addNewTask(this.state.taskValue);
		this.addFieldRef.current.focus();
		this.setState({
			taskValue: ''
		});
	};
	handleTextChange = e => {
		this.setState({
			taskValue: e.target.value
		});
	};
	handleKeyDown = e => {
		if (e.keyCode === 13) {
			if (!this.state.isUpdating) {
				this.addNewTaskHandle();
			}
		}
	};


	constructor(props) {
		super(props);

		this.state = {
			 taskValue: '',
			isUpdating: false
		};
		this.addFieldRef = createRef();
	}

	componentDidMount() {
		this.props.getAddTaskInput(this.addFieldRef.current);
		this.addFieldRef.current.focus();
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextProps.isUpdating !== this.props.isUpdating) {
			this.setState({
				isUpdating: nextProps.isUpdating
			});
		}

		return true;
	}

	render() {
		const { taskValue, isUpdating } = this.state;

		return (
			<div className="actionsBlock">
				<input
					className="addTaskField"
					type="text"
					value={taskValue}
					ref={this.addFieldRef}
					onChange={this.handleTextChange}
					onKeyDown={this.handleKeyDown}
				/>
				<Button
					className="btnAddNew"
					onClick={this.addNewTaskHandle}
					disabled={
						!taskValue.trim()
						||
						isUpdating
					}
				>Add task</Button>
			</div>
		)
	};
}