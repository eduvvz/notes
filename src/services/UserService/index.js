import axios from 'axios';
import { CHECK_EMAIL_EXIST } from '../constants';
import defaultHandleError from '../handleErros';

const UserService = {
  checkEmailExists: (email, dontExecuteDefaultError) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CHECK_EMAIL_EXIST(email))
        .then((res) => {
          return resolve(res.data);
        })
        .catch((error) => {
          reject(error.response);
          return !dontExecuteDefaultError && defaultHandleError(error.response);
        });
    });
  },
};

export default UserService;
