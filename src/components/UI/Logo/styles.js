import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: ({ large }) => ({
    fontFamily: "'Permanent Marker', cursive",
    fontSize: large ? 60 : 25,
    color: theme.palette.text.primary,
  }),
}));

export default useStyles;
