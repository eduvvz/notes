import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import NoteService from '../../../../services/NoteService';
import { setMyNotes } from '../../actions';
import Loader from '../../../UI/Loader';
import ListNotes from '../ListNotes';

function DeletedNotes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { myNotes } = useSelector((state) => state.notes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDeletedNotes() {
      setIsLoading(true);

      const response = await NoteService.getDeletedNotesByUser(user.id);
      console.log(response);
      dispatch(setMyNotes(response.data.rows));

      setIsLoading(false);
    }

    if (user?.id) {
      getDeletedNotes();
    }

    return () => dispatch(setMyNotes([]));
  }, [user.id]);

  return (
    <Grid
      justify={isLoading || myNotes.length === 0 ? 'center' : 'flex-start'}
      container
    >
      {isLoading && <Loader />}
      {!isLoading && myNotes.length === 0 ? (
        <Typography variant="body1">
          Você ainda não tem notas deletadas.
        </Typography>
      ) : (
        <ListNotes notes={myNotes} isDeletedList />
      )}
    </Grid>
  );
}

export default DeletedNotes;
