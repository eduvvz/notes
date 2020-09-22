import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import BarNotes from '../../components/Note/components/BarNotes';

function RegisterPage() {
  const classes = useStyles();

  return (
    <Layout title="Crie sua conta">
      <Grid container className={classes.container}>
        <Container>
          <BarNotes />
        </Container>
      </Grid>
    </Layout>
  );
}

export default RegisterPage;
