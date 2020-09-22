import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

function ActionButton({ label }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor });

  return (
    <button type="button" className={classes.action_button}>
      <Typography variant="subtitle2">{label}</Typography>
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
};

export default ActionButton;
