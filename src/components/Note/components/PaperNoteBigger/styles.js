import { makeStyles } from '@material-ui/core/styles';
import { hexToRgb } from '../../../../utils/colors';

const useStyles = makeStyles((theme) => ({
  paper_note: ({ bgColor }) => ({
    display: 'inline-block',
    position: 'relative',
    marginBottom: theme.spacing(2),
    minHeight: 100,
    width: 500,
    backgroundColor: bgColor
      ? `${hexToRgb(bgColor, 0.4)}`
      : theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(2),
    borderRadius: 10,
    transition: '0.2s',
  }),
  titleNote: {
    marginBottom: theme.spacing(2),
    pointerEvents: 'none',
  },
  contentNote: {
    pointerEvents: 'none',
  },
  icon_close: {
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer',
  },
}));

export default useStyles;
