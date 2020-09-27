import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Folder as FolderIcon } from '@material-ui/icons';
import useStyles from './styles';

function FolderPaper({ id, name }) {
  const classes = useStyles();

  return (
    <div className={classes.folder}>
      <FolderIcon className={classes.folder_icon} />
      <Typography>{name}</Typography>
    </div>
  );
}

FolderPaper.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default FolderPaper;
