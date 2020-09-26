import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useStyles from './styles';

function NoteArea({ onChange }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const [textAreaOnFocus, setTextAreaOnFocus] = useState(false);
  const classes = useStyles({ accentColor });

  function onTextAreaFocus() {
    setTextAreaOnFocus(true);
  }

  function onTextAreaBlur() {
    setTextAreaOnFocus(false);
  }

  return (
    <div
      className={clsx(
        classes.note_area,
        textAreaOnFocus && classes.note_area_on_focus
      )}
    >
      <TextareaAutosize
        rowsMin={3}
        placeholder="Comece a escrever sua nota..."
        onChange={(event) => onChange(event.target.value)}
        onFocus={onTextAreaFocus}
        onBlur={onTextAreaBlur}
        className={classes.textarea}
      />
    </div>
  );
}

NoteArea.propTypes = {
  onChange: PropTypes.func,
};

export default NoteArea;
