import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import OverlayPage from '../../../UI/OverlayPage';
import TextField from '../../../Inputs/TextField';
import useStyles from './styles';
import NoteArea from './components/NoteArea';
import IconButton from '../../../UI/Buttons/IconButton';
import ColorsPicker from './components/ColorsPicker';
import { hideBoxNewNote } from '../../actions';

function BoxNewNote() {
  const dispatch = useDispatch();
  const { boxNewNote, newNote } = useSelector((state) => state.notes);
  const [showBoxNewNote, setShowBoxNewNote] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const classes = useStyles({ newNoteColor: newNote.color });

  useEffect(() => {
    setTimeout(() => setShowOverlay(boxNewNote.show), 0);
    setTimeout(() => setShowBoxNewNote(boxNewNote.show), 300);
  }, [boxNewNote.show]);

  function onChangeInputs() {}

  function onClickDiscard() {
    dispatch(hideBoxNewNote());
  }

  return (
    <OverlayPage show={showOverlay}>
      <div
        className={clsx(
          classes.box_new_note,
          showBoxNewNote && classes.show_box_new_note
        )}
      >
        <TextField label="Qual o titulo?" onChange={onChangeInputs} />
        <NoteArea />
        <Grid xs={12} justify="space-between" item container>
          <Grid xs={2}>
            <ColorsPicker />
          </Grid>
          <Grid xs={10} justify="flex-end" item container>
            <div className={classes.wrapper_off_button}>
              <IconButton
                onClick={onClickDiscard}
                iconName="close"
                tooltip="Descartar..."
              />
            </div>
            <IconButton iconName="save" tooltip="Salvar..." />
          </Grid>
        </Grid>
      </div>
    </OverlayPage>
  );
}

export default BoxNewNote;
