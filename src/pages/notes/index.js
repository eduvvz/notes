import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import BarNotes from '../../components/Note/components/BarNotes';
import BoxNewNote from '../../components/Note/components/BoxNewNote';
import ListNotes from '../../components/Note/components/ListMyNotes';

function RegisterPage() {
  const { boxNewNote } = useSelector((state) => state.notes);
  const classes = useStyles();

  return (
    <Layout title="Suas notas">
      <Grid container className={classes.container}>
        <Container>
          <BarNotes />
          <ListNotes />
        </Container>
      </Grid>
      {boxNewNote.show && <BoxNewNote />}
    </Layout>
  );
}

export default RegisterPage;
