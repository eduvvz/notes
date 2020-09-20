import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textFieldLabel: {
    color: 'white',
    fontWeight: 600,
  },
  textField: ({ accentColor, error }) => ({
    fontWeight: 600,

    '& .MuiInput-underline:after': {
      borderBottomColor: error ? theme.palette.error.main : accentColor,
    },
  }),
}));

export default useStyles;
