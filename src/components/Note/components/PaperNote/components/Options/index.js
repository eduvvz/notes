import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  OpenInBrowser as OpenInBrowserIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './styles';

function Options({ show }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.wrapper_options,
        show && classes.show_wrapper_options
      )}
    >
      <Tooltip title="Editar...">
        <EditIcon className={classes.options_icon} />
      </Tooltip>
      <Tooltip title="Ver...">
        <VisibilityIcon className={classes.options_icon} />
      </Tooltip>
      <Tooltip title="Mover para outro lugar...">
        <OpenInBrowserIcon className={classes.options_icon} />
      </Tooltip>
      <Tooltip title="Arquivar...">
        <ArchiveIcon className={classes.options_icon} />
      </Tooltip>
      <Tooltip title="Deletar...">
        <DeleteIcon className={classes.options_icon} />
      </Tooltip>
    </div>
  );
}

Options.propTypes = {
  show: PropTypes.bool,
};

export default Options;
