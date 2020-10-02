import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import LoginBox from '../../components/User/components/LoginBox';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
  },
}));

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
