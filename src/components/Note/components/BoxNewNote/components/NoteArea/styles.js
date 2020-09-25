import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  note_area: {
    width: '100%',
    padding: theme.spacing(3, 2),
    borderRadius: 10,
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: theme.spacing(4, 0),
    transition: '0.2s',

    '&:HOVER': {
      borderColor: 'white',
    },
  },
  note_area_on_focus: ({ accentColor }) => ({
    border: `1px solid ${accentColor}`,

    '&:HOVER': {
      borderColor: accentColor,
    },
  }),
  textarea: {
    width: '100%',
    border: 'none',
  },
}));

export default useStyles;
