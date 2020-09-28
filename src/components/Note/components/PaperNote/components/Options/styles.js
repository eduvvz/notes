import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper_options: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
    top: 0,
    right: -33,
    borderRadius: 5,
    width: 33,
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.light}`,
    transition: '0.3s',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  show_wrapper_options: {
    visibility: 'visible !important',
    opacity: '1 !important',
  },
  options_icon: {
    fontSize: 20,
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
  },
}));

export default useStyles;
