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
      light: '#4d4d4d',
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
        button: {
          backgroundColor: 'inherit',
          color: 'inherit',
          border: 'inherit',
          cursor: 'pointer',

          '&:FOCUS': {
            outlineStyle: 'none',
          },
        },
        textArea: {
          backgroundColor: 'inherit',
          color: 'inherit',
          border: 'inherit',
          resize: 'none',

          '&:FOCUS': {
            outlineStyle: 'none',
          },
        },
      },
    },
  },
});

export default theme;
