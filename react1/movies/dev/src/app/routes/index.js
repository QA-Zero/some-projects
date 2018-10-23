import React from 'react';
import { Switch } from 'react-router-dom';


const getActions = arr => {
	const getComponent = (route, index) => {
		const newProps = route;
		const Action = newProps.action;
		const isExact = newProps.exact;

		delete newProps.action;
		delete newProps.exact;

		if (isExact) {
			return <Action key={index} {...newProps} exact />
		}
		else {
			return <Action key={index} {...newProps} />
		}
	};

	return (
		arr.map(
			(route, index) => getComponent(
				Object.assign({}, route),
				index
			)
		)
	);
};

const Index = ({ urls, parentPath }) => (
	<Switch>
		{ getActions(urls(parentPath)) }
	</Switch>
);


export default Index;