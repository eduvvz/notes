import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import FolderPaper from '../FolderPaper';
import { removeNote, setFolders } from '../../actions';
import { NOTE_ID_TRANSFER_DRAG_DROG } from '../ListMyNotes/constants';
import NoteService from '../../../../services/NoteService';
import FoldersService from '../../../../services/FoldersService';

function ListMyFolders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { folders } = useSelector((state) => state.notes);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    async function getFolderByUser() {
      const response = await FoldersService.getByUser(user.id);
      dispatch(setFolders(response.data.rows));
    }

    async function getItems() {
      await getFolderByUser();
    }

    if (user?.id) {
      getItems();
    }
  }, [user]);

  function onClickFolder(folderName, folderId) {
    router.push(`/folder/${folderName}/${folderId}`);
  }

  async function onDropNoteInFolder(folderId, ev) {
    const noteId = ev.dataTransfer.getData(NOTE_ID_TRANSFER_DRAG_DROG);

    const noteInFolder = {
      noteId,
      folderId,
    };

    await NoteService.putInFolder(noteInFolder);
    dispatch(removeNote(noteId));
  }

  return (
    <Grid className={classes.list_folder_wrapper} justify="center" container>
      {folders.map(({ id, name }) => (
        <FolderPaper
          key={id}
          name={name}
          onDropDraggable={(ev) => onDropNoteInFolder(id, ev)}
          onClick={() => onClickFolder(name, id)}
        />
      ))}
    </Grid>
  );
}

export default ListMyFolders;
