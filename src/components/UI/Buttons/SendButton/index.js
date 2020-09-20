import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Send } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './styles';

function SendButton({ onClick, disabled }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor, disabled });

  function onClickBtnSend() {
    if (disabled) return;
    onClick();
  }

  return (
    <Tooltip title="enviar...">
      <button
        className={classes.button_send}
        type="button"
        onClick={onClickBtnSend}
      >
        <Send className={classes.send_icon} />
      </button>
    </Tooltip>
  );
}

SendButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default SendButton;
