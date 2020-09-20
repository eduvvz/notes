import { showToastError } from '../utils/toast';

function defaultHandleError(error) {
  if (error.status === 422) {
    error.data.errors.forEach((err) => {
      showToastError(err.msg);
    });
    return;
  }

  showToastError('Algo inesperado aconteceu!');
}

export default defaultHandleError;
