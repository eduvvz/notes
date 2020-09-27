import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  folder: {
    width: 100,
    height: 100,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s',
    cursor: 'pointer',

    '&:HOVER': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  folder_icon: {
    fontSize: 50,
  },
}));

export default useStyles;
