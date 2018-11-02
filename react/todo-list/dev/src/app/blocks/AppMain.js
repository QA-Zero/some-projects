import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { history } from '$store/storage/helpers';
import store from '$store/storage/index';
import Routes from '$routes/index';
import appRoutes from '$routes/appRoutes';
import theme from '$assets/themes/MainTheme';


export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider theme={theme}>
				<Routes getUrls={appRoutes} />
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>
);