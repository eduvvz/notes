import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Banner({ children, urlImage }) {
  const classes = useStyles({ urlImage });

  return <div className={classes.banner_wrapper}>{children}</div>;
}

Banner.propTypes = {
  children: PropTypes.node,
  urlImage: PropTypes.string,
};

export default Banner;
