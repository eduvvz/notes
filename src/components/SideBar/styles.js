import { makeStyles } from '@material-ui/core/styles';
import { MENU_HEIGHT } from '../AppBar/constants';

const useStyles = makeStyles((theme) => ({
  sidebar_wrapper: ({ isOpen }) => ({
    width: 300,
    height: `calc(100vh - ${MENU_HEIGHT}px)`,
    backgroundColor: theme.palette.secondary.main,
    transition: '0.7s',
    transitionTimingFunction: 'ease-out',
    position: 'absolute',
    bottom: 0,
    right: isOpen ? 0 : -300,
    padding: theme.spacing(2, 4),
  }),
  nav_item: ({ accentColor }) => ({
    width: '100%',
    height: 61,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.2s',

    '&:HOVER': {
      color: `${accentColor} !important`,
    },
  }),
  nav_item_icon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
