import axios from 'axios';
import { USERS_CHECK_EMAIL_EXIST, USERS_DEFAULT } from '../constants';
import defaultHandleError from '../handleErros';

const UserService = {
  checkEmailExists: (email, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(USERS_CHECK_EMAIL_EXIST(email))
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
  store: (body, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .post(USERS_DEFAULT, body)
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

export default UserService;
