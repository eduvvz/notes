import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Popover } from '@material-ui/core';
import useStyles from './styles';
import IconButton from '../../../../../UI/Buttons/IconButton';
import colors from '../../../../../../utils/constants/colors';

function ColorsPicker() {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor });
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton iconName="color_lens" onClick={handlePopoverOpen} />
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
          {colors.map((color) => (
            <div
              className={classes.iconColor}
              style={{ backgroundColor: color }}
            />
          ))}
        </Paper>
      </Popover>
    </>
  );
}

export default ColorsPicker;
