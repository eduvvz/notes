import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@material-ui/core';
import useStyles from './styles';
import Loader from '../../UI/Loader';

function TextField({ label, value, onChange, showLoader, error, helperText }) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor, error });

  return (
    <MUITextField
      error={error}
      helperText={helperText}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      className={classes.textField}
      InputProps={{
        endAdornment: showLoader && <Loader size={20} />,
      }}
      InputLabelProps={{
        className: classes.textFieldLabel,
        focused: false,
        shrink: true,
      }}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  showLoader: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default TextField;
