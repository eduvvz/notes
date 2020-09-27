import axios from 'axios';
import {
  NOTES_DEFAULT,
  NOTES_GET_BY_USER,
  NOTES_GET_BY_USER_AND_WITHOUT_FOLDER,
  NOTES_PUT_IN_FOLDER,
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
};

export default NoteService;
