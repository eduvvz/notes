import { showToastError } from '../utils/toast';

function defaultHandleError({ status, data: { errors } }) {
  if (status === 422) {
    return errors.map((error) => ({
      key: error.param,
      error: true,
      helperText: error.msg,
    }));
  }

  return showToastError('Algo inesperado aconteceu!');
}

export function handlerFormErrorValidation(errors, setInputs) {
  errors.forEach((error) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [error.key]: {
          ...prevState[error.key],
          ...error,
        },
      };
    });
  });
  showToastError('Valide suas informações!');
}

export default defaultHandleError;
