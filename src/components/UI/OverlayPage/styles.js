import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  overlay: {
    visibility: 'hidden',
    position: 'absolute',
    top: 0,
    height: '100vh',
    width: '100vw',
    padding: theme.spacing(6),
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    transition: '0.3s',
  },
  overlay_show: {
    visibility: 'visible',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  wrapper_children: {
    position: 'relative',
    minHeight: '100%',
  },
}));

export default useStyles;
