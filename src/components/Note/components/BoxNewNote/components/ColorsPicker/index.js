import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Paper, Popover } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './styles';
import IconButton from '../../../../../UI/Buttons/IconButton';
import colors from '../../../../../../utils/constants/colors';

function ColorsPicker({ onSelectedColor }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const [colorSelected, setColorSelected] = useState(null);
  const classes = useStyles({ accentColor });
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  function onClickColor(newColor) {
    setColorSelected(colorSelected === newColor ? null : newColor);
  }

  useEffect(() => {
    onSelectedColor(colorSelected);
  }, [colorSelected]);

  return (
    <>
      <IconButton
        tooltip="Escolha a cor"
        iconName="color_lens"
        onClick={handlePopoverOpen}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Paper className={classes.paperColors}>
          {colors.map((color, i) => (
            <div
              onClick={() => onClickColor(color)}
              key={`${i}-${color}`}
              className={classes.iconColor}
              style={{ backgroundColor: color }}
            >
              {color === colorSelected && <Close />}
            </div>
          ))}
        </Paper>
      </Popover>
    </>
  );
}

ColorsPicker.propTypes = {
  onSelectedColor: PropTypes.func,
};

export default ColorsPicker;
