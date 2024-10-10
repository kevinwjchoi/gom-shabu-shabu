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
import './App.css'; // Make sure to import your CSS file

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

const EventPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Background Overlay for Group3 */}
        <Box className="event-page-background-overlay">
          <Typography variant="h4" align="center" style={{ zIndex: 3, position: 'relative', color: '#fff', padding: '20px' }}>
            Celebrate Special Events at Gom Shabu
          </Typography>
          <Typography variant="h6" align="center" style={{ zIndex: 3, position: 'relative', color: '#fff', padding: '10px' }}>
            Perfect for Birthday Parties, Group Events, and Special Occasions!
          </Typography>
        </Box>

        {/* First Image below the Background */}
        <Box mt={4} style={{ position: 'relative', zIndex: 1 }}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/group1.jpg" // Replace with actual path to group1 image
              alt="Group Setup"
            />
          </Card>
          <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
            Enjoy a complimentary meal (value of AYCE $34.99) for the birthday person!
            This offer is valid with a government-issued identification on the day of the birthday and must be part of a party of 2 or more.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EventPage;
