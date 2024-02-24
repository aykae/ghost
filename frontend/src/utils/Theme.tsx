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
      main: '#57CC99', // Change the main primary color to the provided color
    },
    secondary: {
      main: '#57CC99', // Change the main secondary color to the provided color
    },
    background: {
      default: '#C7F9CC', // Change the default background color
    },
    text: {
      primary: '#000000', // Black text color within cards
      secondary: '#ffffff', // White for secondary text, often used on top of primary or accent colors
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // More rounded buttons, typical in modern apps
          padding: '6px 16px',
          color: '#ffffff',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Set font for the button text
          fontSize: '1.2rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#57CC99', // Use one of the provided colors for the AppBar background
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // softer shadow
          borderRadius: '12px', // rounded corners
          border: '2px solid #E0E0E0', // light grey border
          color: '#22577A', // text color from the image
          padding: '20px', // padding inside the card
          backgroundColor: '#ffffff', // assuming a white background
          '& .MuiCardContent-root': { // targeting the card content
            padding: '32px', // padding inside the card content
            '&:last-child': {
              paddingBottom: '32px', // padding at the bottom of the card content
            },
          },
          '& .MuiCardActions-root': { // targeting the card actions
            padding: '0', // removing default padding from the actions area
            justifyContent: 'center', // centering the button
          },
          '& .MuiButton-root': { // targeting the button
            fontSize: '1rem', // button font size
            fontWeight: 'bold', // font weight for the button text
            textTransform: 'none', // button text style
            backgroundColor: '#57CC99', // button background color from the image
            color: '#ffffff', // button text color
            borderRadius: '8px', // button border radius
            padding: '10px 24px', // button padding
            '&:hover': {
              backgroundColor: '#57CC99', // darker color on hover
            },
          },
          '& .MuiTypography-h4': { // targeting the h4 typography element for the rate
            fontSize: '2.5rem', // large font size for the rate
            fontWeight: 'bold', // bold font weight for the rate
            color: '#22577A', // text color for the rate
            margin: '0', // remove default margin
          },
          '& .MuiTypography-body1': { // targeting the body1 typography element for the fee
            fontSize: '1rem', // smaller font size for the fee
            fontWeight: 'normal', // normal font weight for the fee
            color: '#22577A', // text color for the fee
            lineHeight: '1.5', // line height for the fee
          },
          '& .MuiSvgIcon-root': { // targeting the checkmark icons
            color: '#22c55e', // checkmark color from the image
            fontSize: '1.2rem', // size of the checkmark icon
          },
        },
      },
    },
    // You can continue customizing other components as needed
  },
});