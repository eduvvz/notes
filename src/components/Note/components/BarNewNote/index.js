import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import ActionButton from '../../../UI/Buttons/ActionButton';
import IconButton from '../../../UI/Buttons/IconButton';

function BarNewNote() {
  const classes = useStyles();

  return (
    <Grid xs={12} justify="center" alignItems="center" container>
      <Grid
        spacing={3}
        xs={12}
        sm={6}
        md={4}
        item
        container
        className={classes.bar_new_note}
      >
        <Grid xs={8} justify="center" alignItems="center" container item>
          <ActionButton label="Crie uma nota..." />
        </Grid>
        <Grid xs={2} justify="center" alignItems="center" container item>
          <IconButton iconName="archive" tooltip="Ver arquivados" />
        </Grid>
        <Grid xs={2} justify="center" alignItems="center" container item>
          <IconButton iconName="delete" tooltip="Ver deletados" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BarNewNote;
