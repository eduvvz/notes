import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import useStyles from './styles';
import FolderItems from '../../../components/Note/components/FolderItems';
import {
  showBackButton,
  hideBackButton,
} from '../../../components/Layout/actions';
import useAuth from '../../../utils/hooks/useAuth';

function FolderPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    dispatch(showBackButton());
    return () => dispatch(hideBackButton());
  }, []);

  return (
    <Layout title="Suas notas!">
      <Grid container className={classes.container}>
        <Container>
          <FolderItems
            folderId={router.query.folderId}
            folderName={router.query.folderName}
          />
        </Container>
      </Grid>
    </Layout>
  );
}

export default FolderPage;
