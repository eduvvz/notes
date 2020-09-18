import React from 'react';
import useStyles from './styles';

function Logo() {
  const classes = useStyles();

  return <span className={classes.logo}>My Notes</span>;
}

export default Logo;
