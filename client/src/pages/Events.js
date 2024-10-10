import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
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
    fontFamily: '"Poppins", "Arial", sans-serif',
  },
});

const Events = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* First Background Overlay */}
        <Box
          className="event-page-background-overlay"
          style={{ backgroundImage: `url(${groupImage1})` }}
        >
          <Typography variant="h4" align="center" style={{ zIndex: 3, position: 'relative', color: '#fff', padding: '20px' }}>
            Celebrate Special Events at Gom Shabu
          </Typography>
          <Typography variant="h6" align="center" style={{ zIndex: 3, position: 'relative', color: '#fff', padding: '10px' }}>
            Perfect for Birthday Parties, Group Events, and Special Occasions!
          </Typography>
        </Box>

        {/* Second Background Overlay */}
        <Box
          className="event-page-background-overlay"
          style={{ backgroundImage: `url(${groupImage3})`, marginTop: '20px' }}
        >
          <Typography variant="body1" align="center" style={{ zIndex: 3, position: 'relative', color: '#fff', padding: '20px' }}>
            Enjoy a complimentary meal (value of AYCE $34.99) for the birthday person!
            This offer is valid with a government-issued identification on the day of the birthday and must be part of a party of 2 or more.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Events;
