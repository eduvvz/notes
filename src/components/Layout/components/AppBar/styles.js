import { makeStyles } from '@material-ui/core/styles';
import { MENU_HEIGHT } from './constants';

const useStyles = makeStyles(() => ({
  app_bar_wrapper: (props) => ({
    height: MENU_HEIGHT,
    backgroundColor: props.accentColor,
    display: 'flex',
    justifyContent: 'center',
  }),
  btn_menu_wrapper: {
    width: 80,
  },
  icon_back_btn: {
    cursor: 'pointer',
  },
}));

export default useStyles;
