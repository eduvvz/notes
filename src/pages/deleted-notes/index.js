import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import {
  showBackButton,
  hideBackButton,
} from '../../components/Layout/actions';
import useAuth from '../../utils/hooks/useAuth';
import DeletedNotes from '../../components/Note/components/DeletedNotes';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(6, 0),
    height: '100%',
  },
}));

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
