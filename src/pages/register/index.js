import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import RegisterBox from '../../components/User/components/RegisterBox';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
  },
}));

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
