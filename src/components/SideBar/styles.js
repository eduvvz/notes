import { makeStyles } from '@material-ui/core/styles';
import { MENU_HEIGHT } from '../AppBar/constants';

const useStyles = makeStyles((theme) => ({
  sidebar_wrapper: ({ isOpen }) => ({
    width: isOpen ? 450 : 0,
    height: `calc(100vh - ${MENU_HEIGHT}px)`,
    backgroundColor: theme.palette.secondary.main,
    transition: '0.7s',
    transitionTimingFunction: 'ease-out',
  }),
}));

export default useStyles;
