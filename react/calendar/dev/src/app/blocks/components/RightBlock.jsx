import React from 'react'
import TopPanel from './TopPanel.jsx'
import CalendarBlock from '../containers/CalendarBlockWrapper.js'
import '../../../assets/styles/RightBlock.scss'


function RightBlock(props) {
	return (
		<div className="right-block">
			<TopPanel />
			<CalendarBlock />
		</div>
	);
}


export default RightBlock;
