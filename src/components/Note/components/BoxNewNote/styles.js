import { makeStyles } from '@material-ui/core/styles';
import { hexToRgb } from '../../../../utils/colors';

const useStyles = makeStyles((theme) => ({
  box_new_note: ({ newNoteColor }) => ({
    opacity: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `0 0 10px rgba(0, 0, 0, 0.6)`,
    backgroundColor: newNoteColor
      ? `${hexToRgb(newNoteColor, 0.4)}`
      : theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: 20,
    maxHeight: '100%',
    overflowY: 'auto',
    transition: '0.3s',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  }),
  show_box_new_note: {
    opacity: '1 !important',
  },
  wrapper_off_button: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
