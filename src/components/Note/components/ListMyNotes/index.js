import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Masonry from 'react-responsive-masonry';
import PaperNote from '../PaperNote';
import useStyles from './styles';
import Loader from '../../../UI/Loader';
import NoteService from '../../../../services/NoteService';
import { setMyNotes } from '../../actions';

function ListMyNotes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { myNotes } = useSelector((state) => state.notes);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getNotesByUser() {
      setIsLoading(true);

      const response = await NoteService.getByUser(user.id);
      dispatch(setMyNotes(response.data));

      setIsLoading(false);
    }

    if (user?.id) getNotesByUser();
  }, [user]);

  function renderList() {
    return (
      <Masonry columnsCount={5} className={classes.list_grid}>
        {myNotes.map(({ title, content, color }) => (
          <PaperNote title={title} content={content} color={color} />
        ))}
      </Masonry>
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
      {!isLoading && myNotes.length === 0 && (
        <Typography variant="body1">Você ainda não tem notas ):</Typography>
      )}
      {myNotes.length > 0 && renderList()}
    </Grid>
  );
}

export default ListMyNotes;
