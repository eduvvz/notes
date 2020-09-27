import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import useStyles from './styles';
import FolderItems from '../../components/Note/components/FolderItems';

function FolderPage() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout title="Suas notas!">
      <Grid container className={classes.container}>
        <Container>
          <FolderItems folderId={router.query.folderId} />
        </Container>
      </Grid>
    </Layout>
  );
}

export default FolderPage;
