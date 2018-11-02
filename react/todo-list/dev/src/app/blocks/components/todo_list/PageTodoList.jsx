import React, { Component } from 'react';

import TasksList from '$cont/todo_list/TasksList';
import ActionsBlock from '$cont/todo_list/ActionsBlock';

import '$assets/styles/PageList.css';


export default class PageTodoList extends Component {
	getAddTaskInput = inputAddTask => {
		this.setState({
			inputAddTask
		});
	};
	changeUpdating = isUpdating => {
		this.setState({
			isUpdating
		});
	};


	constructor(props) {
		super(props);

		this.state = {
			inputAddTask: null,
			  isUpdating: false
		};
	}
/*
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (!this.setAddTaskFocus && this.state.inputAddTask) {
			this.setAddTaskFocus = () => {
				this.state.inputAddTask.focus();
			};
			this.forceUpdate();
		}
	}
*/
	render() {
		const { inputAddTask, isUpdating } = this.state;

		return (
			<div className="pageTodoList">
				<TasksList
					fieldAddTask={inputAddTask}
					changeUpdating={this.changeUpdating}
				/>
				<ActionsBlock
					getAddTaskInput={this.getAddTaskInput}
					isUpdating={isUpdating}
				/>
			</div>
		)
	}
}