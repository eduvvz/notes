import axios from 'axios';
import { NOTES_DEFAULT } from '../constants';
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
};

export default NoteService;
