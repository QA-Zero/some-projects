import React, { Component, Fragment } from 'react';

import Tab from '$a/cont#/movie/navigation/Tab.js';

import '$a/styles#/movie/navigation/NavMain.css';


class NavMain extends Component {
	constructor(props) {
		super(props);

		this.tabs = this.updateTabs(
			this.getTabs(props.id),
			props.parentPath
		);
	}

	componentDidMount() {
		this.tabs = this.updateTabs(
			this.getTabs(this.props.id),
			this.props.parentPath
		);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		const { id, parentPath } = this.props;

		if (nextProps.id && id) {
			this.tabs = this.updateTabs(
				this.getTabs(id),
				parentPath
			);
		}

		return true;
	}

	updateTabs = (tabs, parentPath) => {
		tabs.forEach((tab, index) => {
			tabs[index]['key'] = index;
			tabs[index]['url'] = parentPath + tabs[index]['url'];
		});

		return tabs;
	};

	getTabs = id => {
		return [
			{
				url: `/current/${id}`,
				name: `Current`,
				newClass: `active`
			},
			{
				url: `/similar/${id}`,
				name: `Similar`,
				newClass: ``
			},
			{
				url: `/rec`,
				name: `Recommendations`,
				newClass: ``,
			}
		];
	};

	render() {
		return (
			<Fragment>
				{
					this.tabs.map(tab =>
						<Tab
							url={tab.url}
							name={tab.name}
							key={tab.key}
						/>
					)
				}
			</Fragment>
		);
	}
}


export default NavMain;