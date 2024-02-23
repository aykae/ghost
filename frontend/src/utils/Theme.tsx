import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif', // Roboto is a good choice for a clean and modern UI
    ].join(','),
    button: {
      textTransform: 'none', // Robinhood's buttons tend to use regular casing
    },
  },
  palette: {
    primary: {
      main: '#4FB946', // Robinhood's iconic green, used for buttons, icons, etc.
    },
    secondary: {
      main: '#4FB946', // A darker shade of green for accents
    },
    background: {
      default: '#f5f5f5', // A light grey background, common in modern apps
    },
    text: {
      primary: '#333333', // Dark grey for primary text for better readability
      secondary: '#ffffff', // White for secondary text, often used on top of primary or accent colors
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // More rounded buttons, typical in modern apps
          padding: '6px 16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4FB946', // Use the primary green for the AppBar as well
        },
      },
    },
    // You can continue customizing other components as needed
  },
});
