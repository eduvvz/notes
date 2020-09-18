import React from 'react';
import useStyles from './styles';

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logo_wrapper}>
      <span>My Notes</span>
    </div>
  );
}

export default Logo;
