import React from 'react'
import LeftPanel from './LeftPanel.jsx'
import RightBlock from './RightBlock.jsx'
import '../../../assets/styles/MainApp.scss'


function MainApp(props) {
	return (
		<div className="main-app">
			<LeftPanel />
			<RightBlock />
		</div>
	);
}


export default MainApp;
