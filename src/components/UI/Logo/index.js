import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useStyles from './styles';

function Logo({ large, isLinkToHome }) {
  const classes = useStyles({ large });

  return isLinkToHome ? (
    <Link href="/">
      <a>
        <span className={classes.logo}>My Notes</span>
      </a>
    </Link>
  ) : (
    <span className={classes.logo}>My Notes</span>
  );
}

Logo.propTypes = {
  isLinkToHome: PropTypes.bool,
  large: PropTypes.bool,
};

export default Logo;
