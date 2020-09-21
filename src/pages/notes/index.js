import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';
import useAuth from '../../utils/hooks/useAuth';

function RegisterPage() {
  const { checkAuth, logout } = useAuth();
  const { user } = useSelector((state) => state);
  const classes = useStyles();

  useEffect(checkAuth, []);

  return (
    <Layout title="Crie sua conta">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Container>
          <button onClick={logout}>Logout</button>
          <Typography>{user.data?.name}</Typography>
        </Container>
      </Grid>
    </Layout>
  );
}

export default RegisterPage;
