import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useStyles from './styles';
import { APP_NAME } from '../../../utils/constants';

function Logo({ large, isLinkToHome }) {
  const classes = useStyles({ large });

  return isLinkToHome ? (
    <Link href="/">
      <a>
        <span className={classes.logo}>{APP_NAME}</span>
      </a>
    </Link>
  ) : (
    <span className={classes.logo}>{APP_NAME}</span>
  );
}

Logo.propTypes = {
  isLinkToHome: PropTypes.bool,
  large: PropTypes.bool,
};

export default Logo;
