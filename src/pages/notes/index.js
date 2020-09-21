import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';

function RegisterPage() {
  const { user } = useSelector((state) => state);
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
          <Typography>{user.data?.name}</Typography>
        </Container>
      </Grid>
    </Layout>
  );
}

export default RegisterPage;
