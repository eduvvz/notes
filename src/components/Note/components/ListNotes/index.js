import React from 'react';
import Masonry from 'react-responsive-masonry';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PaperNote from '../PaperNote';
import { NOTE_ID_TRANSFER_DRAG_DROG } from '../ListMyNotes/constants';

function ListPaper({ notes = [], isDeletedList }) {
  function onDragNote(noteId, ev) {
    ev.dataTransfer.setData(NOTE_ID_TRANSFER_DRAG_DROG, noteId);
  }

  return (
    <Grid container>
      <Masonry columnsCount={5}>
        {notes.map(({ id, title, content, color }) => (
          <PaperNote
            key={id}
            title={title}
            content={content}
            color={color}
            onDrag={(ev) => onDragNote(id, ev)}
            noteIsDeleted={isDeletedList}
          />
        ))}
      </Masonry>
    </Grid>
  );
}

ListPaper.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  isDeletedList: PropTypes.bool,
};

export default ListPaper;
