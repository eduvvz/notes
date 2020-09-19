import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import AppBar from '../AppBar';
import newTheme from './theme';
import { APP_NAME } from '../../constants';
import { getRandomColor } from '../../utils/colors';
import { setAccentColor } from './actions';
import PageWrapper from './components/PageWrapper';

const theme = createMuiTheme({
  ...newTheme,
});

function Layout({ children, title }) {
  const dispatch = useDispatch();

  const defineColorsTheme = useCallback(() => {
    const accentColor = getRandomColor();
    dispatch(setAccentColor(accentColor));
  }, []);

  useEffect(() => {
    defineColorsTheme();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{`${APP_NAME} ${title && '-'} ${title}`}</title>
      </Head>
      <CssBaseline />
      <main id="main">
        <AppBar />
        <PageWrapper>{children}</PageWrapper>
      </main>
    </ThemeProvider>
  );
}

Layout.defaultProps = {
  title: '',
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
