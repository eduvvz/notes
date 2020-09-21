import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import SideBar from '../SideBar';

function PageWrapper({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.page_wrapper}>
      <div className={classes.page}>{children}</div>
      <SideBar />
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
