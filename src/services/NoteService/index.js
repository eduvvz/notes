import axios from 'axios';
import {
  NOTES_DEFAULT,
  NOTES_GET_BY_USER,
  NOTES_GET_BY_USER_AND_WITHOUT_FOLDER,
  NOTES_GET_ALL_IN_FOLDER,
  NOTES_PUT_IN_FOLDER,
  NOTES_GET_DELETED_BY_USER,
  NOTES_DELETE_BY_ID,
  NOTES_DELETE_PERMANENTLY_BY_ID,
  NOTES_RESTORE,
} from '../constants';
import defaultHandleError from '../handleErros';

const NoteService = {
  store: (body, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .post(NOTES_DEFAULT, body)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  getByUser: (userId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(NOTES_GET_BY_USER(userId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  getByUserAndWithoutFolder: (userId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(NOTES_GET_BY_USER_AND_WITHOUT_FOLDER(userId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  putInFolder: (body, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .put(NOTES_PUT_IN_FOLDER, body)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  getAllNotesInFolder: (folderId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(NOTES_GET_ALL_IN_FOLDER(folderId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  getDeletedNotesByUser: (userId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(NOTES_GET_DELETED_BY_USER(userId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  deleteNote: (noteId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(NOTES_DELETE_BY_ID(noteId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  deletePermanentlyNote: (noteId, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(NOTES_DELETE_PERMANENTLY_BY_ID(noteId))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },

  restore: (body, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .put(NOTES_RESTORE, body)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          return dontExecuteDefaultError
            ? reject(error.response)
            : reject(defaultHandleError(error.response));
        });
    });
  },
};

export default NoteService;
