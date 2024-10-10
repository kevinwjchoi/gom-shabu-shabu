import React from 'react';
import {
  Container,
  Typography,
  Box,
  CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../App.css';
import groupImage1 from '../images/Group1.png'; 
import groupImage3 from '../images/Group3.png'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D6A4F', // Juniper-inspired green
    },
    secondary: {
      main: '#F6F7EB', // Light background color
    },
  },
  typography: {
    fontWeight: 700, // Bold font weight
    fontSize: '1.25rem', // Standard size for h6
    fontFamily: '"Merriweather", "Georgia", serif',
  },
});

const Events = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* First Background Overlay */}
      <Box
        className="event-page-background-overlay"
        style={{ backgroundImage: `url(${groupImage1})` }}
      >
        <Typography variant="h2" align="center" style={{ color: '#fff', padding: '20px' }}>
          Celebrate Special Events at Gom Shabu
        </Typography>
        <Typography variant="h5" align="center" style={{ color: '#fff', padding: '10px' }}>
          Perfect for Birthday Parties, Group Events, and Special Occasions!
        </Typography>
      </Box>

      {/* Second Background Overlay */}
      <Box
        className="event-page-background-overlay"
        style={{ backgroundImage: `url(${groupImage3})`, marginTop: '20px' }}
      >
        <Typography variant="body1" align="center" style={{ color: '#fff', padding: '20px' }}>
          Enjoy a complimentary meal (value of AYCE $34.99) for the birthday person!
          This offer is valid with a government-issued identification on the day of the birthday and must be part of a party of 2 or more.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Events;
