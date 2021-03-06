import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  Restore as RestoreIcon,
} from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './styles';

function Options({
  onClickDelete,
  onClickDeletePermanently,
  onClickRestore,
  onClickVisualMode,
  show,
  noteIsDeleted,
}) {
  const classes = useStyles();

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
            <RestoreIcon
              onClick={onClickRestore}
              className={classes.options_icon}
            />
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip title="Editar...">
            <EditIcon className={classes.options_icon} />
          </Tooltip>
          <Tooltip title="Ver...">
            <VisibilityIcon
              onClick={onClickVisualMode}
              className={classes.options_icon}
            />
          </Tooltip>
        </>
      )}
      <Tooltip
        title={noteIsDeleted ? `Deletar permanentemente...` : 'Deletar...'}
      >
        <DeleteIcon
          onClick={noteIsDeleted ? onClickDeletePermanently : onClickDelete}
          className={classes.options_icon}
        />
      </Tooltip>
    </div>
  );
}

Options.propTypes = {
  onClickDelete: PropTypes.func,
  onClickDeletePermanently: PropTypes.func,
  onClickRestore: PropTypes.func,
  onClickVisualMode: PropTypes.func,
  show: PropTypes.bool,
  noteIsDeleted: PropTypes.bool,
};

export default Options;
