import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from '@material-ui/core';
import useStyles from './styles';

function IconButton({ iconName, tooltip, onClick }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor });

  const button = (
    <button onClick={onClick} type="button" className={classes.icon_button}>
      <Icon>{iconName}</Icon>
    </button>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
}

IconButton.propTypes = {
  iconName: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
