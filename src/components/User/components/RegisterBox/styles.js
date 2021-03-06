import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4, 'auto'),
  },
  input_wrapper: {
    height: 70,
    position: 'relative',
    margin: theme.spacing(2, 0, 1),
  },
}));

export default useStyles;
