import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import OverlayPage from '../../../UI/OverlayPage';
import TextField from '../../../UI/Inputs/TextField';
import useStyles from './styles';
import NoteArea from './components/NoteArea';
import IconButton from '../../../UI/Buttons/IconButton';
import ColorsPicker from './components/ColorsPicker';
import NoteService from '../../../../services/NoteService';
import { hideBoxNewNote } from '../../actions';
import useFormState from '../../../../utils/hooks/useFormState';
import { handlerFormErrorValidation } from '../../../../services/handleErros';
import { showSucessToast } from '../../../../utils/toast';

function BoxNewNote() {
  const dispatch = useDispatch();
  const { boxNewNote } = useSelector((state) => state.notes);
  const user = useSelector((state) => state.user.data);
  const [isLoading, setIsLoading] = useState(false);
  const [showBoxNewNote, setShowBoxNewNote] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [newNoteColor, setNewNoteColor] = useState(null);
  const classes = useStyles({ newNoteColor });
  const [inputs, setInputs] = useFormState(['title', 'content']);

  useEffect(() => {
    setTimeout(() => setShowOverlay(boxNewNote.show), 0);
    setTimeout(() => setShowBoxNewNote(boxNewNote.show), 300);
  }, [boxNewNote.show]);

  function onChangeInputs(value, key) {
    setInputs((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        error: false,
        helperText: '',
        value,
      },
    }));
  }

  function onClickDiscard() {
    dispatch(hideBoxNewNote());
  }

  async function onClickSaveButton() {
    setIsLoading(true);

    const note = {
      title: inputs.title.value,
      content: inputs.content.value,
      color: newNoteColor,
      userId: user.id,
    };

    try {
      await NoteService.store(note);
      showSucessToast('Nota criada!');
      dispatch(hideBoxNewNote());
    } catch (error) {
      handlerFormErrorValidation(error, setInputs);
    }
    setIsLoading(false);
  }

  function onSelectedColor(color) {
    setNewNoteColor(color);
  }

  return (
    <OverlayPage show={showOverlay}>
      <div
        className={clsx(
          classes.box_new_note,
          showBoxNewNote && classes.show_box_new_note
        )}
      >
        <TextField
          label="Qual o titulo?"
          onChange={(value) => onChangeInputs(value, 'title')}
        />
        <NoteArea onChange={(value) => onChangeInputs(value, 'content')} />
        <Grid xs={12} justify="space-between" item container>
          <Grid xs={2}>
            <ColorsPicker onSelectedColor={onSelectedColor} />
          </Grid>
          <Grid xs={10} justify="flex-end" item container>
            <div className={classes.wrapper_off_button}>
              <IconButton
                disabled={isLoading}
                onClick={onClickDiscard}
                iconName="close"
                tooltip="Descartar..."
              />
            </div>
            <IconButton
              iconName="save"
              tooltip="Salvar..."
              disabled={isLoading}
              onClick={onClickSaveButton}
            />
          </Grid>
        </Grid>
      </div>
    </OverlayPage>
  );
}

export default BoxNewNote;
