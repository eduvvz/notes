import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  banner_container: {
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
