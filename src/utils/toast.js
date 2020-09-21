import { toast } from 'react-toastify';

const defaultConfigsToast = {
  position: 'bottom-right',
  hideProgressBar: true,
};

export const showToastError = (msg) => {
  toast(msg, {
    ...defaultConfigsToast,
    className: 'toast-error',
    bodyClassName: 'toast-error-body',
  });
};

export const showSucessToast = (msg) => {
  toast(msg, {
    ...defaultConfigsToast,
    className: 'toast-sucess',
    bodyClassName: 'toast-sucess-body',
  });
};
