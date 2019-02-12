import React from 'react';
import { Provider } from 'react-redux';
import store from '$store/storage/index';
import { history } from '$store/storage/dev_tools';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '$routes/index';
import appRoutes from '$routes/appRoutes';
import theme from '$assets/themes/MainTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default (
    <MuiThemeProvider theme={theme}>
   		<Provider store={store}>
        	<ConnectedRouter history={history}>
				<Routes getUrls={appRoutes} />
        	</ConnectedRouter>
		</Provider>
    </MuiThemeProvider>
);
