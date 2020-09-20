import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login_box: ({ accentColor }) => ({
    border: `1px solid white`,
    boxShadow: `0 0 10px ${accentColor}`,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 10,
    margin: 'auto',
    padding: theme.spacing(4),
    overflow: 'hidden',
  }),
  btn_back_wrapper: {
    height: 31,
  },
  input_wrapper: {
    height: 70,
    position: 'relative',
    margin: theme.spacing(2, 0, 1),
  },
  input_email_wrapper: {
    position: 'absolute',
    width: '100%',
    transition: '1s',
  },
  input_email_slide_out: {
    transform: 'translateX(120%)',
  },
  input_password_wrapper: {
    position: 'absolute',
    width: '100%',
    transition: '1s',
  },
  input_password_slide_out: {
    transform: 'translateX(-120%)',
  },
}));

export default useStyles;
