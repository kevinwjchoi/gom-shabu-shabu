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
});

export default gomShabuTheme;