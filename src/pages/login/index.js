import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import LoginBox from '../../components/LoginBox';
import useStyles from './styles';

function LoginPage() {
  const classes = useStyles();

  return (
    <Layout title="Entre na sua conta">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Container>
          <LoginBox />
        </Container>
      </Grid>
    </Layout>
  );
}

export default LoginPage;
