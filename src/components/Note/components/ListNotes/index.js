import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-responsive-masonry';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PaperNote from '../PaperNote';
import { NOTE_ID_TRANSFER_DRAG_DROG } from '../ListMyNotes/constants';
import PaperNoteBigger from '../PaperNoteBigger';
import { hideBoxVisualNote } from '../../actions';

function ListPaper({ notes = [], isDeletedList }) {
  const dispatch = useDispatch();
  const boxVisualNote = useSelector((state) => state.notes.boxVisualNote);

  function onDragNote(noteId, ev) {
    ev.dataTransfer.setData(NOTE_ID_TRANSFER_DRAG_DROG, noteId);
  }

  useEffect(() => {
    return () => dispatch(hideBoxVisualNote());
  }, []);

  return (
    <Grid container justify="center">
      {boxVisualNote.show ? (
        <PaperNoteBigger
          title={boxVisualNote.noteData.title}
          content={boxVisualNote.noteData.content}
          color={boxVisualNote.noteData.color}
        />
      ) : (
        <Masonry columnsCount={5}>
          {notes.map(({ id, title, content, color }) => (
            <PaperNote
              key={id}
              id={id}
              title={title}
              content={content}
              color={color}
              onDrag={(ev) => onDragNote(id, ev)}
              noteIsDeleted={isDeletedList}
            />
          ))}
        </Masonry>
      )}
    </Grid>
  );
}

ListPaper.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  isDeletedList: PropTypes.bool,
};

export default ListPaper;
