import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from '@material-ui/core';
import useStyles from './styles';

function IconButton({ iconName, tooltip, onClick, disabled }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor, disabled });

  function onClickBtnIcon(event) {
    if (disabled) return;
    onClick(event);
  }

  const button = (
    <button
      onClick={(event) => onClickBtnIcon(event)}
      type="button"
      className={clsx(classes.icon_button, classes.icon)}
    >
      <Icon>{iconName}</Icon>
    </button>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
}

IconButton.propTypes = {
  iconName: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default IconButton;
