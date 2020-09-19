import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Heebo', sans-serif",
    h1: {
      fontSize: 65,
    },
  },
  palette: {
    primary: {
      main: '#383838',
    },
    secondary: {
      main: '#292929',
    },
    text: {
      primary: 'white',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
