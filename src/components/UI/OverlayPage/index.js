import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { ClickAwayListener } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { hideBoxNewNote } from '../../Note/actions';

function OverlayPage({ children, show }) {
  const { boxNewNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const classes = useStyles();

  function onClickAwayWrapper() {
    if (boxNewNote.show) {
      dispatch(hideBoxNewNote());
    }
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
};

export default OverlayPage;
