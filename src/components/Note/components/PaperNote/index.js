import React, { useState } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Options from './components/Options';

function PaperNote({ title, content, color, onDrag }) {
  const classes = useStyles({ bgColor: color });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.paper_note}
      onDragStart={(ev) => onDrag(ev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable
    >
      <Options show={isHovered} />
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
};

export default PaperNote;
