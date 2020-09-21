import React from 'react';
import { Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from './styles';

function RegisterPage() {
  const classes = useStyles();

  return (
    <Layout title="Crie sua conta">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      />
    </Layout>
  );
}

export default RegisterPage;
