import { makeStyles } from '@material-ui/core/styles';
import { MENU_HEIGHT } from '../AppBar/constants';

const useStyles = makeStyles((theme) => ({
  page_wrapper: {
    display: 'flex',
  },
  page: {
    width: '100%',
    height: `calc(100vh - ${MENU_HEIGHT}px)`,
    overflowY: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
