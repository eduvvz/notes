import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import OverlayPage from '../../../UI/OverlayPage';
import useStyles from './styles';
import { addNewFolder, hideBoxNewFolder } from '../../actions';
import TextField from '../../../UI/Inputs/TextField';
import IconButton from '../../../UI/Buttons/IconButton';
import useFormState from '../../../../utils/hooks/useFormState';
import FoldersService from '../../../../services/FoldersService';
import { showSucessToast } from '../../../../utils/toast';
import { handlerFormErrorValidation } from '../../../../services/handleErros';

function BoxNewFolder() {
  const dispatch = useDispatch();
  const { boxNewFolder } = useSelector((state) => state.notes);
  const user = useSelector((state) => state.user.data);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showBoxNewFolder, setShowBoxNewFolder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useFormState(['name']);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => setShowOverlay(boxNewFolder.show), 0);
    setTimeout(() => setShowBoxNewFolder(boxNewFolder.show), 300);
  }, [boxNewFolder.show]);

  async function onClickSaveButton() {
    setIsLoading(true);

    const folder = {
      name: inputs.name.value,
      userId: user.id,
    };

    try {
      const response = await FoldersService.store(folder);
      dispatch(addNewFolder(response.data));
      showSucessToast('Pasta criada!');
      dispatch(hideBoxNewFolder());
    } catch (error) {
      handlerFormErrorValidation(error, setInputs);
    }
    setIsLoading(false);
  }

  function onClickDiscard() {
    dispatch(hideBoxNewFolder());
  }

  function onClickAwayOverlay() {
    if (boxNewFolder.show) {
      dispatch(hideBoxNewFolder());
    }
  }

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

  return (
    <OverlayPage show={showOverlay} onClickAway={onClickAwayOverlay}>
      <div
        className={clsx(
          classes.box_new_folder,
          showBoxNewFolder && classes.show_box_new_folder
        )}
      >
        <TextField
          label="Qual o nome?"
          onChange={(value) => onChangeInputs(value, 'name')}
          helperText={inputs.name.helperText}
          error={inputs.name.error}
        />
        <Grid
          xs={12}
          justify="flex-end"
          className={classes.options_wrapper}
          item
          container
        >
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

export default BoxNewFolder;
