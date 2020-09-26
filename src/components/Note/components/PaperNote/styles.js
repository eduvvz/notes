import { makeStyles } from '@material-ui/core/styles';
import { hexToRgb } from '../../../../utils/colors';

const useStyles = makeStyles((theme) => ({
  paperNote: ({ bgColor }) => ({
    minHeight: 100,
    width: 230,
    margin: theme.spacing(1),
    backgroundColor: bgColor
      ? `${hexToRgb(bgColor, 0.4)}`
      : theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(2),
    borderRadius: 10,
  }),
}));

export default useStyles;
