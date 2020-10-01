import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import BarNotes from '../../components/Note/components/BarNotes';
import BoxNewNote from '../../components/Note/components/BoxNewNote';
import ListNotes from '../../components/Note/components/ListMyNotes';
import BoxNewFolder from '../../components/Note/components/BoxNewFoder';
import useAuth from '../../utils/hooks/useAuth';

function RegisterPage() {
  const { boxNewNote, boxNewFolder } = useSelector((state) => state.notes);
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [user]);

  return (
    <Layout title="Suas notas">
      <Grid container className={classes.container}>
        <Container>
          <BarNotes />
          <ListNotes />
        </Container>
      </Grid>
      {boxNewNote.show && <BoxNewNote />}
      {boxNewFolder.show && <BoxNewFolder />}
    </Layout>
  );
}

export default RegisterPage;
