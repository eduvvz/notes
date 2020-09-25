import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@material-ui/core';
import useStyles from './styles';
import Loader from '../../Loader';

function TextField({
  label,
  value,
  onChange,
  showLoader,
  error,
  helperText,
  type,
  notShrink,
}) {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor, error });

  return (
    <MUITextField
      error={error}
      helperText={helperText}
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
      className={classes.textField}
      type={type}
      InputProps={{
        endAdornment: showLoader && <Loader size={20} />,
      }}
      InputLabelProps={{
        className: classes.textFieldLabel,
        focused: false,
        shrink: !notShrink,
      }}
    />
  );
}

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  showLoader: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  notShrink: PropTypes.bool,
};

export default TextField;
