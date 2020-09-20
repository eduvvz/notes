import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loader: ({ accentColor }) => ({
    color: accentColor,
  }),
}));

export default useStyles;
