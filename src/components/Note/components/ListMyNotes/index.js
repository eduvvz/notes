import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import PaperNote from '../PaperNote';
import useStyles from './styles';
import Loader from '../../../UI/Loader';
import NoteService from '../../../../services/NoteService';

function ListMyNotes() {
  const user = useSelector((state) => state.user.data);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotesByUser() {
      setIsLoading(true);

      const response = await NoteService.getByUser(user.id);
      setNotes(response.data);

      setIsLoading(false);
    }

    if (user?.id) getNotesByUser();
  }, [user]);

  return (
    <Grid
      className={classes.list_wrapper}
      justify={isLoading || notes.length === 0 ? 'center' : 'flex-start'}
      container
    >
      {isLoading && <Loader />}
      {!isLoading && notes.length === 0 && (
        <Typography variant="body1">Você ainda não tem notas ):</Typography>
      )}
      {notes.map(({ title, content, color }) => (
        <PaperNote title={title} content={content} color={color} />
      ))}
    </Grid>
  );
}

export default ListMyNotes;
