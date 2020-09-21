import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

function GridBoxGlow(props) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const { color, children, classnames } = props;
  const classes = useStyles({ glowColor: color || accentColor });

  return (
    <Grid className={clsx([classes.box_glow, ...classnames])} {...props}>
      {children}
    </Grid>
  );
}

GridBoxGlow.defaultProps = {
  classnames: [],
};

GridBoxGlow.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  classnames: PropTypes.arrayOf(PropTypes.object),
};

export default GridBoxGlow;
