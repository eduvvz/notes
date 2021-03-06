import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import NoteService from '../../../../services/NoteService';
import { setMyNotes } from '../../actions';
import ListNotes from '../ListNotes';
import Loader from '../../../UI/Loader';
import useStyles from './styles';

function FolderItems({ folderId, folderName = '' }) {
  const dispatch = useDispatch();
  const { myNotes } = useSelector((state) => state.notes);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    async function getAllNotesInFolder() {
      setIsLoading(true);

      const response = await NoteService.getAllNotesInFolder(folderId);
      dispatch(setMyNotes(response.data));

      setIsLoading(false);
    }

    getAllNotesInFolder();

    return () => dispatch(setMyNotes([]));
  }, [folderId]);

  return (
    <Grid
      justify={isLoading || myNotes.length === 0 ? 'center' : 'flex-start'}
      container
    >
      <Grid container justify="center">
        <Typography gutterBottom className={classes.folder_title}>
          {folderName}
        </Typography>
      </Grid>
      {isLoading && <Loader />}
      {!isLoading && myNotes.length === 0 ? (
        <Typography variant="body1">
          Você ainda não tem notas nesta pasta ):
        </Typography>
      ) : (
        <ListNotes notes={myNotes} />
      )}
    </Grid>
  );
}

FolderItems.propTypes = {
  folderId: PropTypes.string,
  folderName: PropTypes.string,
};

export default FolderItems;
