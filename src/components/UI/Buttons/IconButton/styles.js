import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon_button: ({ accentColor }) => ({
    width: 39,
    height: 39,
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '100%',
    transition: '0.2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:HOVER': {
      borderColor: accentColor,
    },
  }),
}));

export default useStyles;
