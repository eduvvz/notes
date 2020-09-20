import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button_send: ({ accentColor, disabled }) => ({
    width: 45,
    height: 45,
    borderRadius: '100%',
    border: `1px solid ${theme.palette.primary.main}`,
    transition: '0.2s',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:HOVER': {
      borderColor: disabled ? theme.palette.primary.main : accentColor,
    },
  }),
  send_icon: ({ disabled }) => ({
    color: disabled ? theme.palette.primary.main : 'white',
    fontSize: 20,
  }),
}));

export default useStyles;
