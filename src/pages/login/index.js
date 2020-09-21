import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import LoginBox from '../../components/User/components/LoginBox';

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
