import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import '../assets/styles/appFonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.objectOf(PropTypes.object),
};

export default MyApp;
