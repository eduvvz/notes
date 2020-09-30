import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import useStyles from './styles';
import { showBoxNewFolder, showBoxNewNote } from '../../actions';
import ActionButton from '../../../UI/Buttons/ActionButton';
import IconButton from '../../../UI/Buttons/IconButton';

function BarNote() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();

  function onClickNewNote() {
    dispatch(showBoxNewNote());
  }

  function onClickNewFolder() {
    dispatch(showBoxNewFolder());
  }

  function onClickDeletedNotes() {
    router.push('deleted-notes');
  }

  return (
    <Grid xs={12} justify="center" alignItems="center" container item>
      <Grid
        spacing={3}
        xs={12}
        sm={8}
        md={5}
        item
        container
        className={classes.bar_new_note}
      >
        <Grid xs={7} md={8} justify="center" alignItems="center" container item>
          <ActionButton onClick={onClickNewNote} label="Crie uma nota..." />
        </Grid>
        <Grid
          xs={5}
          md={4}
          justify="space-around"
          alignItems="center"
          container
          item
        >
          <IconButton
            onClick={onClickNewFolder}
            iconName="create_new_folder"
            tooltip="Criar nova pasta"
          />
          <IconButton
            onClick={onClickDeletedNotes}
            iconName="delete"
            tooltip="Ver deletados"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BarNote;
