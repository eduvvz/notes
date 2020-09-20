import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import TextField from '../Inputs/TextField';
import SendButton from '../UI/Buttons/SendButton';
import { STEPS_LOGIN_FORM } from './constants';

function LoginBox() {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const [isLoading, setIsLoading] = useState(false);
  const [stepForm, setStepForm] = useState(0);
  const classes = useStyles({ accentColor });

  function onClickSendButton() {
    setIsLoading(true);
  }

  return (
    <Grid sm={12} md={6} item className={classes.login_box}>
      <div className={classes.input_wrapper}>
        <TextField label="Digite seu e-mail..." showLoader={isLoading} />
      </div>
      <Grid container justify="flex-end">
        <SendButton onClick={onClickSendButton} disabled={isLoading} />
      </Grid>
    </Grid>
  );
}

export default LoginBox;
