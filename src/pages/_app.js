import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import store from '../store';
import '../assets/styles/appFonts.css';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/utils.css';
import { getRandomColor } from '../utils/colors';

function MyApp({ Component, pageProps }) {
  const [newProps, setNewProps] = useState(pageProps);
  useEffect(() => {
    const accentColor = getRandomColor();
    setNewProps((prevState) => ({ ...prevState, accentColor }));
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...newProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

export default MyApp;
