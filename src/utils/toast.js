import { toast } from 'react-toastify';

export const showToastError = (msg) => {
  toast(msg, {
    position: 'bottom-right',
    className: 'toast-error',
    bodyClassName: 'toast-error-body',
    hideProgressBar: true,
  });
};
