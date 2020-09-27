import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import Loader from '../../../UI/Loader';
import NoteService from '../../../../services/NoteService';
import { setMyNotes } from '../../actions';
import ListMyFolders from '../ListMyFolders';
import ListPaper from '../ListNotes';

function ListMyNotes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { myNotes } = useSelector((state) => state.notes);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getNotesByUserAndWithoutFolder() {
      const response = await NoteService.getByUserAndWithoutFolder(user.id);
      dispatch(setMyNotes(response.data.rows));
    }

    async function getItems() {
      setIsLoading(true);

      await getNotesByUserAndWithoutFolder();

      setIsLoading(false);
    }

    if (user?.id) {
      getItems();
    }
  }, [user]);

  function renderListNotes() {
    return (
      <>
        {!isLoading && <ListMyFolders />}
        {!isLoading && myNotes.length === 0 ? (
          <Typography variant="body1">Você ainda não tem notas ):</Typography>
        ) : (
          <ListPaper notes={myNotes} />
        )}
      </>
    );
  }

  return (
    <Grid
      className={classes.list_wrapper}
      justify={isLoading || myNotes.length === 0 ? 'center' : 'flex-start'}
      alignItems="flex-start"
      container
    >
      {isLoading && <Loader />}
      {renderListNotes()}
    </Grid>
  );
}

export default ListMyNotes;
