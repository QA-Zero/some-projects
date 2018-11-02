import React, { Component, createRef } from 'react';
import Button from '@material-ui/core/Button';

import '$assets/styles/SingleTask.css';


export default class SingleTask extends Component {
	handleUpdateStart = () => {
		const { changeTotalUpdating } = this.props;

		this.setState({
			isCurrentUpdating: true
		});

		changeTotalUpdating(
			true,
			scrollTop => {
				this.setState({
					scrollTop: scrollTop
				});
			}
		);
	};
	handleKeyDown = e => {
		if (e.keyCode === 13) {
			if (this.state.changingValue.trim()) {
				this.handleUpdateSave();
			}
		}
		if (e.keyCode === 27) {
			this.handleUpdateCancel();
		}
	};
	handleTextChange = e => {
		this.setState({
			changingValue: e.target.value
		});
	};
	handleUpdateCancel = () => {
		const { fieldAddTask, changeTotalUpdating } = this.props;
		const { value } = this.state;

		this.setState({
			isCurrentUpdating: false,
			    changingValue: value
		});
		this.updatedField = null;
		fieldAddTask.focus();

		changeTotalUpdating(false, () => {});
	};
	handleUpdateSave = () => {
		const { fieldAddTask, changeTotalUpdating, updateTask } = this.props;
		const { id, changingValue } = this.state;

		this.setState({
			isCurrentUpdating: false,
			            value: changingValue
		});
		this.updatedField = null;
		fieldAddTask.focus();

		changeTotalUpdating(false, () => {});
		updateTask(id, changingValue);
	};

	handleRemoveTask = () => {
		const { fieldAddTask, deleteTask } = this.props;
		const { id } = this.state;
		fieldAddTask.focus();

		deleteTask(id);
	};
	handleDoneTask = () => {
		const { fieldAddTask, doneTask } = this.props;
		const { id } = this.state;

		this.setState({
			isDone: true
		});
		fieldAddTask.focus();

		doneTask(id);
	};


	constructor(props) {
		super(props);
		const { taskInfo, scrollTop, isScroll } = props;

		this.state = {
			scrollTop,
			isScroll,
			isCurrentUpdating: false,
			  isTotalUpdating: false,
				changingValue: taskInfo.value,

						   id: taskInfo.id,
						value: taskInfo.value,
					   isDone: taskInfo.isDone
		};

		this.updatedFieldRef = createRef();
		   this.updatedField = null;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextProps['taskInfo'].value !== this.props['taskInfo'].value) {
			this.setState({
				        value: nextProps['taskInfo'].value,
				changingValue: nextProps['taskInfo'].value
			});
		}
		if (nextProps['taskInfo'].isDone !== this.props['taskInfo'].isDone) {
			this.setState({
				isDone: nextProps['taskInfo'].isDone
			});
		}
		if (nextProps.isTotalUpdating !== this.props.isTotalUpdating) {
			this.setState({
				isTotalUpdating: nextProps.isTotalUpdating
			});
		}

		return true;
	}


	componentDidUpdate(prevProps, prevState, snapShot) {
		if (this.updatedField) {
			if (this.state.isCurrentUpdating) {
				this.updatedField.focus();
			}
		}
		else {
			if (this.updatedFieldRef.current) {
				this.updatedField = this.updatedFieldRef.current;
			}
		}

		if (prevProps.isScroll !== this.props.isScroll) {
			this.setState({
				isScroll: this.props.isScroll
			});
			this.forceUpdate();
		}
	}

	render() {
		const {
			isDone,
			value,
			changingValue,
			isCurrentUpdating,
			isTotalUpdating,
			scrollTop,
			isScroll
		} = this.state;
console.log( isScroll );
		return (
			<>
			{
				isDone
					? (
						<div
							className="singleTask"
							style={{ backgroundColor: '#3b9' }}
						>
							<div className="taskValue">{value}</div>
							<div className={
								`controls ${(isTotalUpdating || !isScroll ) ? 'isUpdating' : 'notUpdating'}`
							}>
								<Button
									className="btn btnRemoveDone"
									onClick={this.handleRemoveTask}
									disabled={isTotalUpdating}
								>Remove</Button>
							</div>
						</div>
					)
					: (
						<div
							className="singleTask"
							style={{
								backgroundColor: isCurrentUpdating ? '#b9daff' : '#ccc'
							}}
						>
						{
							isCurrentUpdating
								? (
									<>
										<div
											className="inputWrapper"
											style={{
												border: isCurrentUpdating ? '2px solid #55c' : 'none'
											}}
										>
											<input
												className="updateTaskField"
												style={{ marginTop: `${6 - scrollTop}px` }}
												type="text"
												value={changingValue}
												ref={this.updatedFieldRef}
												onChange={this.handleTextChange}
												onKeyDown={this.handleKeyDown}
												onClick={this.test}
											/>
										</div>
										<div className={
											`controls ${(isTotalUpdating || !isScroll ) ? 'isUpdating' : 'notUpdating'}`
										}>
											<Button
												className="btn btnBig btnUpdateSave"
												onClick={this.handleUpdateSave}
												disabled={!changingValue.trim()}
											>Save</Button>
											<Button
												className="btn btnBig btnUpdateCancel"
												onClick={this.handleUpdateCancel}
											>Cancel</Button>
										</div>
									</>
								)
								: (
									<>
										<div className="taskValue">{value}</div>
										<div className={
											`controls ${(isTotalUpdating || !isScroll ) ? 'isUpdating' : 'notUpdating'}`
										}>
											<Button
												className="btn btnSmall btnDone"
												onClick={this.handleDoneTask}
												disabled={isTotalUpdating}
											>Done</Button>
											<Button
												className="btn btnSmall btnUpdateBegin"
												onClick={this.handleUpdateStart}
												disabled={isTotalUpdating}
											>Update</Button>
											<Button
												className="btn btnSmall btnRemove"
												onClick={this.handleRemoveTask}
												disabled={isTotalUpdating}
											>Remove</Button>
										</div>
									</>
								)
						}
						</div>
					)
			}
			</>
		);
	}
}