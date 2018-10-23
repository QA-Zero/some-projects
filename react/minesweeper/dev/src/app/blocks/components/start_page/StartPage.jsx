import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Emoji from '$cont/total/Emoji';

import { allValues, defaultValues } from '$const/boardParams';

import '$assets/styles/start_page/StartPage.css';


const CustomRadioGroup = ({ label, groupName, handleChange, values, current }) => (
	<div className={`block ${label}`}>
		<div className="label">{label}</div>

		<RadioGroup
			className="rg"
			name={label}
			value={current + ''}
			onChange={e => handleChange(groupName, e.target.value)}
		>
			<FormControlLabel
				className="row row-first"
				label={values[0]}
				value={values[0] + ''}
				control={<Radio />}
			/>
			<FormControlLabel
				className="row row-second"
				label={values[1]}
				value={values[1] + ''}
				control={<Radio />}
			/>
			<FormControlLabel
				className="row row-third"
				label={values[2]}
				value={values[2] + ''}
				control={<Radio />}
			/>
		</RadioGroup>
	</div>
);
const Options = ({ rowLength, colLength, mines, handleChange }) => (
	<div className="options">
		<CustomRadioGroup
			label="rows"
			groupName="rowLength"
			handleChange={handleChange}
			values={allValues.rows}
			current={rowLength}
		/>
		<CustomRadioGroup
			label="cols"
			groupName="colLength"
			handleChange={handleChange}
			values={allValues.cols}
			current={colLength}
		/>
		<CustomRadioGroup
			label="mines"
			groupName="mines"
			handleChange={handleChange}
			values={allValues.mines}
			current={mines}
		/>
	</div>
);

export default class SearchBox extends Component {
	handleChange = (groupName, value) => {
		this.setState({
			[groupName]: value - 0
		});
	};
	handleStart = () => {
		const { initBoardParams, push } = this.props;

		initBoardParams(this.state);
		push('/game');
	};

	constructor(props) {
		super(props);
		this.state = defaultValues;
	}

	componentDidMount() {
		document.addEventListener(
			'keydown',
			e => {
				if (e.keyCode === 13) {
					this.handleStart();
				}
			},
			false
		);
	}
	componentWillUnmount() {
		document.removeEventListener(
			'keydown',
			e => {
				if (e.keyCode === 13) {
					this.handleStart();
				}
			},
			false
		);
	}

	render() {
		return (
			<div className="content">
				<Emoji size={15} type="bang" />
				<Options
					{...this.state}
					handleChange={this.handleChange}
				/>
				<Button
					className="startBtn"
					onClick={this.handleStart}
				>Start game</Button>
			</div>
		);
	}
}