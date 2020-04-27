// noinspection ES6CheckImport
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext';
import '../../../assets/styles/CalendarBlock.scss'
import '@fullcalendar/core/main.min.css'
import '@fullcalendar/daygrid/main.min.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


class CalendarBlock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mode    : 'month',
			plugin  : 'dayGridMonth',
			calendar: null,
			events  : [],
			dialog  : {
				id       : false,
				isVisible: false,
				title    : '',
				fields: {
					name       : '',
					description: '',
					date       : '',
					time       : '',
					bgColor    : '',
					fontColor  : '',
				}
			},
		};
	}

	setMode = mode => {
		const { setMode }  = this.props;
		const { calendar } = this.state;
		let plugin;

		switch (mode) {
			case 'month' : plugin = 'dayGridMonth'; break;
			case 'week'  : plugin = 'dayGridWeek';  break;
			case 'day'   : plugin = 'dayGridDay';   break;

			default      : plugin = 'dayGridMonth'; break;
		}

		this.setState({ mode, plugin });
		setMode(mode);

		calendar.changeView(plugin);
	};
	getCurrentDate = () => {
		const today  = new Date();
		const yyyy = today.getFullYear();
		const mm   = String(today.getMonth() + 1).padStart(2, '0');
		const dd   = String(today.getDate()).padStart(2, '0');

		return yyyy + '-' + mm + '-' + dd;
	};
	getDateAndTime = dateObj => {
		const yyyy = dateObj.getFullYear();
		const mm   = String(dateObj.getMonth() + 1).padStart(2, '0');
		const dd   = String(dateObj.getDate()).padStart(2, '0');

		const hours   = dateObj.getHours()   === 0 ? '00' : dateObj.getHours();
		const minutes = dateObj.getMinutes() === 0 ? '00' : dateObj.getMinutes();

		return {
			date: yyyy + '-' + mm + '-' + dd,
			time: hours + ':' + minutes,
		};
	};
	toggleDialog = (isVisible, id) => {
		let newDialog;

		if (id) {
			newDialog = {
				...this.state.dialog,
				title: 'Edit event',
				id,
				isVisible,
			};
		}
		else {
			newDialog = {
				...this.state.dialog,
				title: 'Create event',
				id   : null,
				isVisible,
			};
		}

		if (isVisible) {
			this.setState({
				dialog: { ...newDialog },
			});
		} else {
			this.setState({
				dialog: {
					...newDialog,
					fields: {
						name       : '',
						description: '',
						date       : '',
						time       : '',
						bgColor    : '',
						fontColor  : '',
					},
				}
			});
		}
	};
	saveValues = () => {
		const { dialog, calendar } = this.state;
		const fields               = dialog.fields;
		// Need more validation here
		const name        = fields.name        === '' ? 'New event'           : fields.name;
		const description = fields.description === '' ? ''                    : fields.description;
		const date        = fields.date        === '' ? this.getCurrentDate() : fields.date;
		const time        = fields.time        === '' ? '00:00'               : fields.time;
		const bgColor     = fields.bgColor     === '' ? '#0000ff'             : fields.bgColor;
		const fontColor   = fields.fontColor   === '' ? '#ffffff'             : fields.fontColor;

		let newEvent = {
			title          : name,
			start          : date + 'T' + time,
			backgroundColor: bgColor,
			textColor      : fontColor,
			extendedProps  : { description },
			allDay         : false,
			editable       : true,
		};

		if (dialog.id) {
			newEvent = {
				...newEvent,
				id: dialog.id,
			};
			calendar.getEventById(dialog.id).remove();
		} else {
			newEvent = {
				...newEvent,
				id: + new Date(),
			};

		}
		calendar.addEvent(newEvent);

		this.toggleDialog(false, false);
	};
	deleteEvent = () => {
		const { dialog, calendar } = this.state;

		calendar.getEventById(dialog.id).remove();
		this.toggleDialog(false, false);
	};
	changeName = name => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					name,
				},
			}
		});
	};
	changeDescription = description => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					description,
				},
			}
		});
	};
	changeDate = date => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					date,
				},
			}
		});
	};
	changeTime = time => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					time,
				},
			}
		});
	};
	changeBgColor = bgColor => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					bgColor,
				},
			}
		});
	};
	changeFontColor = fontColor => {
		const { dialog } = this.state;
		// validation need here
		this.setState({
			dialog: {
				...dialog,
				fields: {
					...dialog.fields,
					fontColor,
				},
			}
		});
	};
	getDialog = () => {
		const { dialog } = this.state;

		const content = (
			<>
				<div className="line name">
					<span className="p-float-label">
						<InputText
							id="float-input-name"
							type="text"
							size="30"
							value={ dialog.fields.name }
							onChange={ e => this.changeName(e.target['value'])	}
						/>
						<label htmlFor="float-input-name">Event name (default «New event»)</label>
					</span>
				</div>
				<div className="line description">
					<span className="p-float-label">
						<InputText
							id="float-input-description"
							type="text"
							size="30"
							value={ dialog.fields.description }
							onChange={ e => this.changeDescription(e.target['value'])	}
						/>
						<label htmlFor="float-input-description">Notes (default empty)</label>
					</span>
				</div>
				<div className="line date">
					<span className="p-float-label">
						<InputText
							id="float-input-date"
							type="text"
							size="30"
							value={ dialog.fields.date }
							onChange={ e => this.changeDate(e.target['value'])	}
						/>
						<label htmlFor="float-input-date">Date (default «{ this.getCurrentDate() }»)</label>
					</span>
				</div>
				<div className="line time">
					<span className="p-float-label">
						<InputText
							id="float-input-time"
							type="text"
							size="30"
							value={ dialog.fields.time }
							onChange={ e => this.changeTime(e.target['value'])	}
						/>
						<label htmlFor="float-input-time">Time (default «00:00»)</label>
					</span>
				</div>
				<div className="line bg-color">
					<span className="p-float-label">
						<InputText
							id="float-input-bg_color"
							type="text"
							size="30"
							value={ dialog.fields.bgColor }
							onChange={ e => this.changeBgColor(e.target['value'])	}
						/>
						<label htmlFor="float-input-bg_color">Bg color (default «#0000ff»)</label>
					</span>
				</div>
				<div className="line font-color">
					<span className="p-float-label">
						<InputText
							id="float-input-font_color"
							type="text"
							size="30"
							value={ dialog.fields.fontColor }
							onChange={ e => this.changeFontColor(e.target['value'])	}
						/>
						<label htmlFor="float-input-font_color">Font color (default «#ffffff»)</label>
					</span>
				</div>
			</>
		);
		const footer = (
			<div>
				<Button
					label={ dialog.id ? 'Delete' : 'Cancel' }
					className="p-button-danger"
					onClick={ dialog.id ? this.deleteEvent : () => this.toggleDialog(false, false) }
				/>
				<Button
					label={ dialog.id ? 'Update' : 'Save' }
					className="p-button-success"
					onClick={ this.saveValues }
				/>
			</div>
		);

		return (
			<Dialog
				header={ dialog.title }
				footer={ footer }
				visible={dialog.isVisible}
				modal={ true }
				onHide={ () => this.toggleDialog(false, false) }
			>{ content }</Dialog>
		);
	};

	componentDidMount() {
		const height  = document.getElementById('root').offsetHeight;

		const calendarNode = document.getElementById('calendar');
		const self = this;
		const options = {
			plugins       : [ dayGridPlugin, interactionPlugin ],
			defaultView   : this.state.plugin,
			height        : height / 2268 * 1600,
			contentHeight : height / 2268 * 1430,
			fixedWeekCount: false,
			selectable    : true,
			header: {
				left  : 'today,prev,next',
				center: 'title',
				right : '',
			},
			buttonText: {
				today: 'Today',
				prev : 'Back',
				next : 'Next',
			},
			events: this.state.events,
			eventRender: function(info) {
				info.el.setAttribute('title', info.event.extendedProps.description);
			},
			eventClick: function({ event }) {
				const dateAndTime = self.getDateAndTime(event.start);

				self.setState({
					dialog: {
						...self.state.dialog,
						fields: {
							name       : event.title,
							description: event.extendedProps.description,
							date       : dateAndTime.date,
							time       : dateAndTime.time,
							bgColor    : event.backgroundColor,
							fontColor  : event.textColor,
						},
					}
				});
				self.toggleDialog(true, event.id);
			},
			select: function() {
				self.toggleDialog(true, false);
			},
		};
		const calendar = new Calendar(calendarNode, options);
		this.setState({ calendar });
		calendar.render();

		const setStyles = () => {
			const toolbar = Array.from(document.getElementsByClassName('fc-header-toolbar'))[0];

			toolbar.style.height = height / 2268 * 105 + 'px';
			toolbar.style.marginBottom = 0 + 'px';
		};
		const addListeners = (btnToday, btnBack, btnNext) => {
			btnToday.addEventListener(
				'click',
				() => {
					const btnToday  = Array.from(document.getElementsByClassName('fc-today-button'))[0];
					const btnBack   = Array.from(document.getElementsByClassName('fc-prev-button'))[0];
					const btnNext   = Array.from(document.getElementsByClassName('fc-next-button'))[0];
					const cellsList = [
						...Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-future')),
						Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-today'))[0],
					];

					btnToday.classList.add('active');
					addListeners(btnToday, btnBack, btnNext, cellsList);
					setStyles();
				}
			);
			btnBack.addEventListener(
				'click',
				() => {
					const btnToday  = Array.from(document.getElementsByClassName('fc-today-button'))[0];
					const btnBack   = Array.from(document.getElementsByClassName('fc-prev-button'))[0];
					const btnNext   = Array.from(document.getElementsByClassName('fc-next-button'))[0];
					const cellsList = [
						...Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-future')),
						Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-today'))[0],
					];

					addListeners(btnToday, btnBack, btnNext, cellsList);
					setStyles();
				}
			);
			btnNext.addEventListener(
				'click',
				() => {
					const btnToday  = Array.from(document.getElementsByClassName('fc-today-button'))[0];
					const btnBack   = Array.from(document.getElementsByClassName('fc-prev-button'))[0];
					const btnNext   = Array.from(document.getElementsByClassName('fc-next-button'))[0];
					const cellsList = [
						...Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-future')),
						Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-today'))[0],
					];

					addListeners(btnToday, btnBack, btnNext, cellsList);
					setStyles();
				}
			);
		};

		const btnToday  = Array.from(document.getElementsByClassName('fc-today-button'))[0];
		const btnBack   = Array.from(document.getElementsByClassName('fc-prev-button'))[0];
		const btnNext   = Array.from(document.getElementsByClassName('fc-next-button'))[0];
		const cellsList = [
			...Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-future')),
			Array.from(document.querySelectorAll('.fc-day.fc-widget-content.fc-today'))[0],
		];

		setStyles();
		addListeners(btnToday, btnBack, btnNext, cellsList);
	}

	render() {
		const { mode } = this.state;

		return (
			<div className="content-block">
				<div className="calendar-column">
					<div className="title">Calendar</div>
					<div className="calendar-area">
						<div className="header">
							<div className="title">Calender View</div>
							<div className="controls">
								<Button
									className={mode === 'month' ? "month active" : "month"}
									label="Month"
									onClick={() => this.setMode('month')}
								/>
								<Button
									className={mode === 'week' ? "week active" : "week"}
									label="Week"
									onClick={() => this.setMode('week')}
								/>
								<Button
									className={mode === 'day' ? "day active" : "day"}
									label="Day"
									onClick={() => this.setMode('day')}
								/>
								<Button
									className="agenda"
									label="Agenda"
								/>
							</div>
						</div>
						<div className="calendar" id="calendar"> </div>
					</div>
				</div>
				{ this.getDialog() }
			</div>
		);
	}
}


export default CalendarBlock;
