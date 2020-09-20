import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

function Loader(props) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor });

  return <CircularProgress className={classes.loader} {...props} />;
}

export default Loader;
