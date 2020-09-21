import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import RegisterBox from '../../components/RegisterBox';

function RegisterPage() {
  const classes = useStyles();

  return (
    <Layout title="Crie sua conta">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Container>
          <RegisterBox />
        </Container>
      </Grid>
    </Layout>
  );
}

export default RegisterPage;
