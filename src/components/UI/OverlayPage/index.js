import React from 'react';
import clsx from 'clsx';
import { ClickAwayListener } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

function OverlayPage({ children, show, onClickAway }) {
  const classes = useStyles();

  function onClickAwayWrapper() {
    onClickAway();
  }

  return (
    <div className={clsx(classes.overlay, show && classes.overlay_show)}>
      <div className={classes.wrapper_children}>
        <ClickAwayListener onClickAway={onClickAwayWrapper}>
          {children}
        </ClickAwayListener>
      </div>
    </div>
  );
}

OverlayPage.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClickAway: PropTypes.func,
};

export default OverlayPage;
