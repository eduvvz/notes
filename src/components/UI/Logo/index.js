import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Logo({ large }) {
  const classes = useStyles({ large });

  return <span className={classes.logo}>My Notes</span>;
}

Logo.propTypes = {
  large: PropTypes.bool,
};

export default Logo;
