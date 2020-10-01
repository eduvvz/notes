import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  folder: ({ isDragOver }) => ({
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s',
    cursor: 'pointer',
    margin: theme.spacing(1),
    backgroundColor: isDragOver ? theme.palette.primary.light : 'inherit',

    '&:HOVER': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  folder_icon: {
    fontSize: 50,
    pointerEvents: 'none',
  },
  folder_name: {
    pointerEvents: 'none',
  },
  more_icon: {
    opacity: 0,
    position: 'absolute',
    right: 5,
    top: 10,
    fontSize: 20,
    cursor: 'pointer',
    transition: '0.2s',
  },
  show_more_icon: {
    opacity: 1,
  },
}));

export default useStyles;
