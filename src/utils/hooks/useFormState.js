import { useState } from 'react';

function useFormState(configInputs = []) {
  const newInputs = {};

  configInputs.forEach((config) => {
    if (typeof config === 'string') {
      newInputs[config] = {
        value: '',
        error: false,
        helperText: '',
      };
      return;
    }

    newInputs[config.key] = {
      value: '',
      error: false,
      helperText: '',
      ...config.addToObj,
    };
  });

  const [inputs, setInputs] = useState(newInputs);

  return [inputs, setInputs];
}

export default useFormState;
