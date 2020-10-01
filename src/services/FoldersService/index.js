import axios from 'axios';
import { FOLDERS_DEFAULT, FOLDERS_GET_BY_USER } from '../constants';
import defaultHandleError from '../handleErros';
import { USER_TOKEN } from '../../utils/constants/localStorage';

const getHeader = () => ({
  'x-access-token': localStorage.getItem(USER_TOKEN),
});

const FoldersService = {
  store: (body, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .post(FOLDERS_DEFAULT, body, { headers: getHeader() })
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
        .get(FOLDERS_GET_BY_USER(userId), { headers: getHeader() })
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

export default FoldersService;
