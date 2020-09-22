import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import BarNewNote from '../../components/Note/components/BarNewNote';

function RegisterPage() {
  const classes = useStyles();

  return (
    <Layout title="Crie sua conta">
      <Grid container className={classes.container}>
        <Container>
          <BarNewNote />
        </Container>
      </Grid>
    </Layout>
  );
}

export default RegisterPage;
