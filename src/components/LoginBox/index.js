import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { ArrowBack } from '@material-ui/icons';
import useStyles from './styles';
import TextField from '../Inputs/TextField';
import SendButton from '../UI/Buttons/SendButton';
import UserService from '../../services/UserService';
import DiscreetButton from '../UI/Buttons/DiscreetButton';
import { STEPS_LOGIN } from './contants';
import GridBoxGlow from '../UI/GridBoxGlow';

function LoginBox() {
  const [inputs, setInputs] = useState({
    email: { value: '', error: false, helperText: '', moveOut: false },
    password: { value: '', error: false, helperText: '', moveOut: true },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [stepLogin, setStepLogin] = useState(STEPS_LOGIN.FIRST);
  const classes = useStyles();

  function changeStage(nextStep) {
    setTimeout(
      () => {
        setInputs((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            moveOut: nextStep !== STEPS_LOGIN.FIRST,
          },
        }));
      },
      nextStep !== STEPS_LOGIN.FIRST ? 0 : 250
    );

    setTimeout(
      () => {
        setInputs((prevState) => ({
          ...prevState,
          password: {
            ...prevState.password,
            moveOut: nextStep !== STEPS_LOGIN.SECOND,
          },
        }));
      },
      nextStep !== STEPS_LOGIN.SECOND ? 250 : 0
    );

    setStepLogin(nextStep);
  }

  async function handleFirstStepForm() {
    try {
      const { data, msg } = await UserService.checkEmailExists(
        inputs.email.value
      );

      if (data.exist) {
        changeStage(STEPS_LOGIN.SECOND);
      } else {
        setInputs((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            error: true,
            helperText: msg,
          },
        }));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  function onClickSendButton() {
    setIsLoading(true);

    if (stepLogin === STEPS_LOGIN.FIRST) {
      handleFirstStepForm();
    }
  }

  function onChangeInput(value, key) {
    setInputs((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        value,
        error: false,
        helperText: '',
      },
    }));
  }

  return (
    <GridBoxGlow sm={12} md={6} item>
      <Grid xs={12} className={classes.btn_back_wrapper}>
        {STEPS_LOGIN.SECOND === stepLogin && (
          <DiscreetButton
            icon={<ArrowBack />}
            tooltip="Entrar com um e-mail diferente"
            onClick={() => changeStage(STEPS_LOGIN.FIRST)}
          />
        )}
      </Grid>
      <div className={classes.input_wrapper}>
        <div
          className={clsx(
            classes.input_email_wrapper,
            inputs.email.moveOut && classes.input_email_slide_out
          )}
        >
          <TextField
            label="Digite seu e-mail..."
            onChange={(value) => onChangeInput(value, 'email')}
            showLoader={isLoading}
            error={inputs.email.error}
            helperText={inputs.email.helperText}
          />
        </div>
        <div
          className={clsx(
            classes.input_password_wrapper,
            inputs.password.moveOut && classes.input_password_slide_out
          )}
        >
          <TextField
            label="Digite sua senha..."
            onChange={(value) => onChangeInput(value, 'email')}
            showLoader={isLoading}
            error={inputs.email.error}
            type="password"
            helperText={inputs.email.helperText}
          />
        </div>
      </div>
      <Grid container justify="space-between" alignItems="center">
        <Link href="/register">
          <a>
            <DiscreetButton label="Ainda não tem uma conta?" />
          </a>
        </Link>
        <SendButton onClick={onClickSendButton} disabled={isLoading} />
      </Grid>
    </GridBoxGlow>
  );
}

export default LoginBox;
