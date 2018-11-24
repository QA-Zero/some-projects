import React from 'react';
import { Provider } from 'react-redux';
import store from '$store/storage/index';
import theme from '$assets/themes/MainTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MainPage from '$cont/MainPage';


export default () => (
    <MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<MainPage />
		</Provider>
    </MuiThemeProvider>
);