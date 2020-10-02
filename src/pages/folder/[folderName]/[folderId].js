import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import FolderItems from '../../../components/Note/components/FolderItems';
import {
  showBackButton,
  hideBackButton,
} from '../../../components/Layout/actions';
import useAuth from '../../../utils/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(6, 0),
    height: '100%',
  },
}));

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
