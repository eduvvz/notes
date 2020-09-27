import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

function PaperNote({ title, content, color, onDrag, onClick }) {
  const classes = useStyles({ bgColor: color });

  return (
    <div
      className={classes.paperNote}
      draggable
      onDragStart={(ev) => onDrag(ev)}
      onClick={onClick}
    >
      {title && (
        <Typography className={classes.titleNote} variant="body1" gutterBottom>
          {title}
        </Typography>
      )}
      <Typography variant="body2">
        {content && parse(content.replace(/\n/gm, '<br />'))}
      </Typography>
    </div>
  );
}

PaperNote.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  onDrag: PropTypes.func,
  onClick: PropTypes.func,
};

export default PaperNote;
