import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import SingleTask from '$cont/todo_list/SingleTask';

import '$assets/styles/TaskList.css';


export default class TaskList extends Component {
	getOrder = tasks => tasks.reduce(
		(result, task) => {
			result.push(task.id);
			return result;
		},
		[]
	);
	changeUpdatingState = (isTotalUpdating, changeScrollTop) => {
		this.setState({
			isTotalUpdating
		});
		this.props.changeUpdating(isTotalUpdating);

		if (isTotalUpdating) {
			changeScrollTop(this.scrollTop);
		}
	};
	onDragEnd = result => {
		if (result.destination) {
			const reorder = (list, startIndex, endIndex) => {
				const result = Array.from(list);
				const [removed] = result.splice(startIndex, 1);
				result.splice(endIndex, 0, removed);

				return result;
			};
			const items = reorder(
				this.state.items,
				result.source.index,
				result.destination.index
			);

			this.setState({
				items,
				order: this.getOrder(items)
			});
		}
	};


	constructor(props) {
		super(props);

		props.listInit();

		this.state = {
			          items: [],
					  order: [],
				   isScroll: false,
			isTotalUpdating: false
		};
		this.scrollTop = 0;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (this.props.tasks !== nextProps.tasks ) {
			if (this.props.tasks.length === 0) {
				this.setState({
					items: nextProps.tasks,
					order: this.getOrder(nextProps.tasks)
				});
				if (nextProps.tasks.length > 7) {
					this.setState({
						isScroll: true
					});
				}
				if (nextProps.tasks.length <= 7) {
					this.setState({
						isScroll: false
					});
				}
			}
			else {
				let newList = [];

				this.state.order.forEach(
					id => {
						nextProps.tasks.forEach(
							newProp => {
								if (newProp.id === id) {
									newList.push(newProp)
								}
							}
						);
					}
				);
				nextProps.tasks.forEach(
					newProp => {
						let isNotPresent = true;

						newList.forEach(
							listProp => {
								if (newProp.id === listProp.id) {
									isNotPresent = false;
								}
							}
						);

						if (isNotPresent) {
							newList.push(newProp)
						}
					}
				);

				this.setState({
					items: newList
				});
				if (!this.state.isScroll && newList.length > 7) {
					this.setState({
						isScroll: true
					});
				}
				if (this.state.isScroll && newList.length <= 7) {
					this.setState({
						isScroll: false
					});
				}
			}
		}

		return true;
	}

	componentDidUpdate(prevProps, prevState, snapShot) {
		const list = document.body.getElementsByClassName('todoList')[0];

		if (list) {
			list.addEventListener(
				'scroll',
				e => {
					this.scrollTop = e.srcElement.scrollTop;
				}
			);

			if (this.needScrolling) {
				this.needScrolling = false;
				list.scrollTo(0, list.scrollHeight);
			}
			if (
				(prevProps.tasks.length < this.props.tasks.length)
				&&
				(prevProps.tasks.length !== 0)
			) {
				this.needScrolling = true;
			}
		}
	}

	render() {
		const { fieldAddTask } = this.props;
		const { isTotalUpdating, items, isScroll } = this.state;

		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="droppable" isDropDisabled={isTotalUpdating}>
				{
					provided => (
						<div
							className="todoList"
							ref={provided.innerRef}
							style={{ overflowY: isTotalUpdating ? 'hidden' : 'auto' }}
						>
							{items.map(
								(item, index) => (
									<Draggable
										key={item.id}
										draggableId={item.id}
										index={index}
									>
									{
										provided => (
											<div
												className="taskWrapper"
												ref={provided.innerRef}
												{...provided['draggableProps']}
												{...provided['dragHandleProps']}

												style={{
													...provided.draggableProps.style,
													cursor: isTotalUpdating ? 'default' : 'move',
												}}
											>
												<SingleTask
													taskInfo={item}
													isTotalUpdating={isTotalUpdating}
													changeTotalUpdating={this.changeUpdatingState}
													fieldAddTask={fieldAddTask}
													isScroll={isScroll}
												/>
											</div>
										)
									}
									</Draggable>
								)
							)}
							{ provided.placeholder }
						</div>
					)
				}
				</Droppable>
			</DragDropContext>
		);
	}
}