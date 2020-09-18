import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import store from '../../store';
import newTheme from './theme';
import { APP_NAME } from '../../constants';

const theme = createMuiTheme({
  ...newTheme,
});

const Layout = ({ children, title }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{`${APP_NAME} ${title && '-'} ${title}`}</title>
        </Head>
        <CssBaseline />
        <main id="main">{children}</main>
      </ThemeProvider>
    </Provider>
  );
};

Layout.defaultProps = {
  title: '',
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
