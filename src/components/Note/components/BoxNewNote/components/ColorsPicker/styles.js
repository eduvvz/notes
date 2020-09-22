import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    marginTop: theme.spacing(1),
  },
  paper: {
    backgroundColor: theme.palette.primary.dark,
  },
  paperColors: {
    backgroundColor: theme.palette.primary.dark,
    width: 200,
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconColor: ({ accentColor }) => ({
    margin: '2px 5px',
    width: 30,
    height: 30,
    borderRadius: '100%',
    border: '1px solid white',
    transition: '0.3s',
    marginBottom: theme.spacing(1),
    cursor: 'pointer',

    '&:HOVER': {
      borderColor: accentColor,
    },
  }),
}));

export default useStyles;
