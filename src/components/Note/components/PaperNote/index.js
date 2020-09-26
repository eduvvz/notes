import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

function PaperNote({ title, content, color }) {
  const classes = useStyles({ bgColor: color });

  return (
    <div className={classes.paperNote}>
      {title && (
        <Typography className={classes.titleNote} variant="body1" gutterBottom>
          {title}
        </Typography>
      )}
      <Typography variant="body2">
        {parse(content.replace(/\n/gm, '<br />'))}
      </Typography>
    </div>
  );
}

PaperNote.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
};

export default PaperNote;
