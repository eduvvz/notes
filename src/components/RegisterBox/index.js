import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useStyles from './styles';
import SendButton from '../UI/Buttons/SendButton';
import DiscreetButton from '../UI/Buttons/DiscreetButton';
import GridBoxGlow from '../UI/GridBoxGlow';
import TextField from '../Inputs/TextField';
import UserService from '../../services/UserService';
import { showSucessToast, showToastError } from '../../utils/toast';

function RegisterBox() {
  const router = useRouter();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: {
      value: '',
      error: false,
      helperText: '',
    },
    email: {
      value: '',
      error: false,
      helperText: '',
    },
    password: {
      value: '',
      error: false,
      helperText: '',
    },
    confirmPassword: {
      value: '',
      error: false,
      helperText: '',
    },
  });

  function handleErrorStore({ status, data: { errors } }) {
    if (status === 422) {
      errors.forEach((error) => {
        setInputs((prevState) => ({
          ...prevState,
          [error.param]: {
            ...prevState[error.param],
            error: true,
            helperText: error.msg,
          },
        }));
      });

      return;
    }

    showToastError('Algo inesperado acontenceu!');
  }

  async function onClickCreateAccount() {
    setIsLoading(true);
    const user = {
      name: inputs.name.value,
      email: inputs.email.value,
      password: inputs.password.value,
      confirmPassword: inputs.confirmPassword.value,
    };
    try {
      await UserService.store(user, true);
      showSucessToast('Sua conta foi criada com sucesso!');
      router.push('/login');
    } catch (error) {
      handleErrorStore(error);
    }
    setIsLoading(false);
  }

  function onChangeInput(value, key) {
    setInputs((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        error: false,
        helperText: '',
        value,
      },
    }));
  }

  return (
    <GridBoxGlow sm={12} md={6} item>
      <Grid
        xs={12}
        className={classes.btn_back_wrapper}
        justify="center"
        item
        container
      >
        <Typography>Crie sua conta</Typography>
      </Grid>
      <div className={classes.input_wrapper}>
        <TextField
          label="Nome..."
          error={inputs.name.error}
          helperText={inputs.name.helperText}
          onChange={(value) => onChangeInput(value, 'name')}
        />
      </div>
      <div className={classes.input_wrapper}>
        <TextField
          label="E-mail..."
          error={inputs.email.error}
          helperText={inputs.email.helperText}
          onChange={(value) => onChangeInput(value, 'email')}
        />
      </div>
      <div className={classes.input_wrapper}>
        <TextField
          label="Senha..."
          type="password"
          error={inputs.password.error}
          helperText={inputs.password.helperText}
          onChange={(value) => onChangeInput(value, 'password')}
        />
      </div>
      <div className={classes.input_wrapper}>
        <TextField
          label="Confirme sua senha..."
          type="password"
          error={inputs.confirmPassword.error}
          helperText={inputs.confirmPassword.helperText}
          onChange={(value) => onChangeInput(value, 'confirmPassword')}
        />
      </div>
      <Grid container justify="space-between" alignItems="center">
        <Link href="/login">
          <a>
            <DiscreetButton label="Já tem uma conta?" />
          </a>
        </Link>
        <SendButton onClick={onClickCreateAccount} disabled={isLoading} />
      </Grid>
    </GridBoxGlow>
  );
}

export default RegisterBox;
