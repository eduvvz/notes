import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Options from './components/Options';
import NoteService from '../../../../services/NoteService';
import { removeNote } from '../../actions';
import { showSucessToast } from '../../../../utils/toast';

function PaperNote({ id, title, content, color, onDrag, noteIsDeleted }) {
  const dispatch = useDispatch();
  const classes = useStyles({ bgColor: color });
  const [isHovered, setIsHovered] = useState(false);

  async function onClickDeleteNote() {
    const response = await NoteService.deleteNote(id);
    dispatch(removeNote(response.data.id));

    showSucessToast(response.data.msg);
  }

  return (
    <div
      className={classes.paper_note}
      onDragStart={(ev) => onDrag(ev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable
    >
      <Options
        onClickDelete={onClickDeleteNote}
        show={isHovered}
        noteIsDeleted={noteIsDeleted}
      />
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
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  onDrag: PropTypes.func,
  noteIsDeleted: PropTypes.bool,
};

export default PaperNote;
