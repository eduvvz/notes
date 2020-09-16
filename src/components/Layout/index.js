import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from '../../store';
import newTheme from './theme';

const theme = createMuiTheme({
  ...newTheme,
});

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main id="main">{children}</main>
      </ThemeProvider>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
