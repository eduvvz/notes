import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './styles';

function OverlayPage({ children, show }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.overlay, show && classes.overlay_show)}>
      <div className={classes.wrapper_children}>{children}</div>
    </div>
  );
}

OverlayPage.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
};

export default OverlayPage;
