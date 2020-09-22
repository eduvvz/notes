import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  action_button: ({ accentColor }) => ({
    width: '100%',
    padding: theme.spacing(1, 2),
    textAlign: 'initial',
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: 20,
    transition: '0.2s',

    '&:HOVER': {
      borderColor: accentColor,
    },
  }),
}));

export default useStyles;
