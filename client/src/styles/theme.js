import { createTheme } from '@mui/material/styles';

const gomShabuTheme = createTheme({
  palette: {
    primary: {
      main: '#4A4A4A', // Dark gray
      light: '#6d6d6d', // Slightly lighter shade of dark gray
      dark: '#2e2e2e', // Darker shade of the primary color
    },
    secondary: {
      main: '#D3D3D3', // Light gray
      light: '#e0e0e0', // Slightly lighter shade of light gray
      dark: '#a8a8a8', // Darker light gray
    },
    background: {
      default: '#F5F5F5', // Soft light gray for general background
      paper: '#FFFFFF', // White, matching the sign text
    },
    text: {
      primary: '#212121', // Dark gray for primary text
      secondary: '#757575', // Medium gray for secondary text
    },
  },
    typography: {
      fontFamily: '"Helvetica Neue", "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700, // Bold font weight
        fontSize: '2rem', // Standard size for h1
      },
      h2: {
        fontWeight: 700, // Bold font weight
        fontSize: '1.75rem', // Standard size for h2
      },
      h4: {
        fontWeight: 700, // Bold font weight
        fontSize: '1.5rem', // Standard size for h4
      },
      h5: {
        fontWeight: 700, // Bold font weight
        fontSize: '1.25rem', // Standard size for h6
        fontFamily: '"Merriweather", "Georgia", serif',
      },
      h6: {
        fontWeight: 700, // Bold font weight
        fontSize: '1.25rem', // Standard size for h6
        fontFamily: '"Times New Roman", "Georgia", serif',
      },
      body1: {
        fontWeight: 400, // Normal font weight
        fontSize: '1rem', // Standard size for body1
      },
      body2: {
        fontWeight: 400, // Normal font weight
        fontSize: '0.875rem', // Standard size for body2
      },
      copyright: {
        fontWeight: 400, // Normal font weight
        fontSize: '0.75rem', // Very tiny size for copyright
        color: '#666', // Optional: A lighter color for subtle text
      }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: '2rem', // Customize the font size for Toolbar
          color: '#white'
        },
      },
    },
  },
});

export default gomShabuTheme;