import React from 'react';
import { Switch } from 'react-router-dom';

const getActions = urls => {
	return urls.map(
		(route, index) => {
			const Action = route.action;
			const isExact = route.exact;

			delete route.action;
			delete route.exact;

			return (
				isExact
					? <Action key={index} {...route} exact />
					: <Action key={index} {...route} />
			);
		}
	);
};

export default ({ getUrls }) => (
	<Switch>
		{ getActions(getUrls()) }
	</Switch>
);
