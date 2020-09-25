import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Popover } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './styles';
import IconButton from '../../../../../UI/Buttons/IconButton';
import colors from '../../../../../../utils/constants/colors';
import { changeColorNewNote } from '../../../../actions';

function ColorsPicker() {
  const dispatch = useDispatch();
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const { newNote } = useSelector((state) => state.notes);
  const classes = useStyles({ accentColor });
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  function onClickColor(color) {
    dispatch(changeColorNewNote(newNote.color === color ? null : color));
  }

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
              {color === newNote.color && <Close />}
            </div>
          ))}
        </Paper>
      </Popover>
    </>
  );
}

export default ColorsPicker;
