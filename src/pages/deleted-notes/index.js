import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import {
  showBackButton,
  hideBackButton,
} from '../../components/Layout/actions';
import useAuth from '../../utils/hooks/useAuth';
import DeletedNotes from '../../components/Note/components/DeletedNotes';

function DeletedNotesPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    dispatch(showBackButton());
    return () => dispatch(hideBackButton());
  }, []);

  return (
    <Layout title="Notas deletadas!">
      <Grid container className={classes.container}>
        <Container>
          <DeletedNotes />
        </Container>
      </Grid>
    </Layout>
  );
}

export default DeletedNotesPage;
