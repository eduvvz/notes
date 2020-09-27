import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Masonry from 'react-responsive-masonry';
import PaperNote from '../PaperNote';
import useStyles from './styles';
import Loader from '../../../UI/Loader';
import NoteService from '../../../../services/NoteService';
import { removeNote, setFolders, setMyNotes } from '../../actions';
import FoldersService from '../../../../services/FoldersService';
import FolderPaper from '../FolderPaper';
import { NOTE_ID_TRANSFER_DRAG_DROG } from './constants';

function ListMyNotes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { myNotes, folders } = useSelector((state) => state.notes);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getNotesByUserAndWithoutFolder() {
      const response = await NoteService.getByUserAndWithoutFolder(user.id);
      dispatch(setMyNotes(response.data.rows));
    }

    async function getFolderByUser() {
      const response = await FoldersService.getByUser(user.id);
      dispatch(setFolders(response.data.rows));
    }

    async function getItems() {
      setIsLoading(true);

      await getNotesByUserAndWithoutFolder();
      await getFolderByUser();

      setIsLoading(false);
    }

    if (user?.id) {
      getItems();
    }
  }, [user]);

  async function onDropNoteInFolder(folderId, ev) {
    const noteId = ev.dataTransfer.getData(NOTE_ID_TRANSFER_DRAG_DROG);

    const noteInFolder = {
      noteId,
      folderId,
    };

    await NoteService.putInFolder(noteInFolder);
    dispatch(removeNote(noteId));
  }

  function onDragNote(noteId, ev) {
    ev.dataTransfer.setData(NOTE_ID_TRANSFER_DRAG_DROG, noteId);
  }

  function renderListNotes() {
    return (
      <>
        {!isLoading && (
          <Grid
            className={classes.list_folder_wrapper}
            justify="center"
            container
          >
            {folders.map(({ id, name }) => (
              <FolderPaper
                key={id}
                name={name}
                onDropDraggable={(ev) => onDropNoteInFolder(id, ev)}
              />
            ))}
          </Grid>
        )}
        {!isLoading && myNotes.length === 0 ? (
          <Typography variant="body1">Você ainda não tem notas ):</Typography>
        ) : (
          <Grid container>
            <Masonry columnsCount={5}>
              {myNotes.map(({ id, title, content, color }) => (
                <PaperNote
                  key={id}
                  title={title}
                  content={content}
                  color={color}
                  onDrag={(ev) => onDragNote(id, ev)}
                />
              ))}
            </Masonry>
          </Grid>
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
