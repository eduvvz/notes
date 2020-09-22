import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box_new_note: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `0 0 10px rgba(0, 0, 0, 0.6)`,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: 20,

    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  wrapper_off_button: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
