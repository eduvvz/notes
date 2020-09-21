import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box_glow: ({ glowColor }) => ({
    border: `1px solid white`,
    boxShadow: `0 0 10px ${glowColor}`,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 10,
    margin: 'auto',
    padding: theme.spacing(4),
    overflow: 'hidden',
  }),
}));

export default useStyles;
