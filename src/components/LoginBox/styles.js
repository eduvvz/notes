import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login_box: ({ accentColor }) => ({
    border: `1px solid white`,
    boxShadow: `0 0 10px ${accentColor}`,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 10,
    margin: 'auto',
    padding: theme.spacing(6, 4),
  }),
  input_wrapper: {
    height: 70,
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
