import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  OpenInBrowser as OpenInBrowserIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
  Restore as RestoreIcon,
} from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './styles';

function Options({ onClickDelete, show, noteIsDeleted }) {
  const classes = useStyles();

  function onClickPermanentlyDeleteNote() {}

  return (
    <div
      className={clsx(
        classes.wrapper_options,
        show && classes.show_wrapper_options
      )}
    >
      {noteIsDeleted ? (
        <>
          <Tooltip title="Restaurar...">
            <RestoreIcon className={classes.options_icon} />
          </Tooltip>
        </>
      ) : (
        <>
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
        </>
      )}
      <Tooltip
        title={noteIsDeleted ? `Deletar permanentemente...` : 'Deletar...'}
      >
        <DeleteIcon
          onClick={noteIsDeleted ? onClickPermanentlyDeleteNote : onClickDelete}
          className={classes.options_icon}
        />
      </Tooltip>
    </div>
  );
}

Options.propTypes = {
  onClickDelete: PropTypes.string,
  show: PropTypes.bool,
  noteIsDeleted: PropTypes.bool,
};

export default Options;
