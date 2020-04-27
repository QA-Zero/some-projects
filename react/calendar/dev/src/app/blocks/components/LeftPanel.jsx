import React from 'react'
import '../../../assets/styles/LeftPanel.scss'


function LeftPanel(props) {
	return (
		<div className="left-panel">
			<div className="header">IMPECCABLE</div>
			<div className="body">
				<div className="item home">
					<div className="icon"></div>
					<div className="name">Home</div>
				</div>
				<div className="item dashboard">
					<div className="icon"></div>
					<div className="name">Dashboard</div>
				</div>
				<div className="item inbox">
					<div className="icon"></div>
					<div className="name">Inbox</div>
				</div>
				<div className="item products">
					<div className="icon"></div>
					<div className="name">Products</div>
				</div>
				<div className="item invoices">
					<div className="icon"></div>
					<div className="name">Invoices</div>
				</div>
				<div className="item customers">
					<div className="icon"></div>
					<div className="name">Customers</div>
				</div>
				<div className="item chat-room">
					<div className="icon"></div>
					<div className="name">Chat Room</div>
				</div>
				<div className="item calendar">
					<div className="icon"></div>
					<div className="name">Calendar</div>
				</div>
				<div className="item help-center">
					<div className="icon"></div>
					<div className="name">Help Center</div>
				</div>
				<div className="item settings">
					<div className="icon"></div>
					<div className="name">Settings</div>
				</div>
			</div>
		</div>
	);
}


export default LeftPanel;
