import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import {
  Folder as FolderIcon,
  MoreVert as MoreVertIcon,
} from '@material-ui/icons';
import useStyles from './styles';

function FolderPaper({ name, onDropDraggable, onClick }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles({ isDragOver });

  function onDragOver(ev) {
    ev.preventDefault();
    setIsDragOver(true);
  }

  function onDragLeave(ev) {
    ev.preventDefault();
    setIsDragOver(false);
  }

  function onDrop(ev) {
    ev.preventDefault();
    setIsDragOver(false);
    onDropDraggable(ev);
  }

  return (
    <div
      className={classes.folder}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onClick}
    >
      <div
        className={clsx(classes.more_icon, isHovered && classes.show_more_icon)}
      />

      <FolderIcon className={classes.folder_icon} />
      <Typography align="center" className={classes.folder_name}>
        {name}
      </Typography>
    </div>
  );
}

FolderPaper.propTypes = {
  name: PropTypes.string,
  onDropDraggable: PropTypes.func,
  onClick: PropTypes.func,
};

export default FolderPaper;
