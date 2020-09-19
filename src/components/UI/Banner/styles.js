import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  banner_wrapper: ({ urlImage }) => ({
    height: '100%',
    width: '100%',
    backgroundImage: `url(${urlImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }),
}));

export default useStyles;
