import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    transition: '0.6s',
  },
  input_email_slide_out: {
    transform: 'translateX(120%)',
  },
  input_password_wrapper: {
    position: 'absolute',
    width: '100%',
    transition: '0.6s',
  },
  input_password_slide_out: {
    transform: 'translateX(-120%)',
  },
}));

export default useStyles;
