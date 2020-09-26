import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperNote: {
    minHeight: 100,
    width: 230,
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(2),
    borderRadius: 10,
  },
}));

export default useStyles;
