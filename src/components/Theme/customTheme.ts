import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e2858c'
    },
    secondary: {
      main: '#79b1b7'
    },
    grey: {
      500: '#cbcbcb',
      300: '#e9e9e9'
    },

    text: {
      primary: '#104148'
    }
  },
  transitions: {
    duration: {
      standard: 500,
      short: 300,
      shorter: 200,
      shortest: 100
    }
  }
});
