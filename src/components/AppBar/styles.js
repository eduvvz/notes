import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app_bar_wrapper: (props) => ({
    height: 61,
    backgroundColor: props.primaryColor,
    display: 'flex',
    justifyContent: 'center',
  }),
  btn_menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
}));

export default useStyles;
