import React from 'react'
import '../../../assets/styles/TopPanel.scss'


function TopPanel(props) {
	return (
		<div className="top-panel">
			<div className="search-block">
				<div className="search icon"> </div>
				<div className="text">Search transactions, invoices or help</div>
			</div>
			<div className="user-block">
				<div className="round icon"> </div>
				<div className="chat icon"> </div>
				<div className="bell icon"> </div>
				<div className="line"> </div>
				<div className="name">John Doe</div>
				<div className="arrow icon"> </div>
				<div className="user icon">	</div>
			</div>
		</div>
	);
}


export default TopPanel;
