import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Folder as FolderIcon } from '@material-ui/icons';
import useStyles from './styles';

function FolderPaper({ name, onDropDraggable, onClick }) {
  const [isDragOver, setIsDragOver] = useState(false);
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
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onClick}
    >
      <FolderIcon className={classes.folder_icon} />
      <Typography>{name}</Typography>
    </div>
  );
}

FolderPaper.propTypes = {
  name: PropTypes.string,
  onDropDraggable: PropTypes.func,
  onClick: PropTypes.func,
};

export default FolderPaper;
