import React from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Cancel as CancelIcon } from '@material-ui/icons';
import useStyles from './styles';
import { hideBoxVisualNote } from '../../actions';

function PaperNoteBigger({ title, content, color }) {
  const dispatch = useDispatch();
  const classes = useStyles({ bgColor: color });

  function onClickClose() {
    dispatch(hideBoxVisualNote());
  }

  return (
    <div className={classes.paper_note}>
      <CancelIcon onClick={onClickClose} className={classes.icon_close} />
      {title && (
        <Typography className={classes.titleNote} variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Typography variant="body1">
        {content && parse(content.replace(/\n/gm, '<br />'))}
      </Typography>
    </div>
  );
}

PaperNoteBigger.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
};

export default PaperNoteBigger;
