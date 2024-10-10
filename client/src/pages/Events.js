import React from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Snackbar,
  SnackbarContent,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import group1 from '../images/Group1.png'
import group3 from '../images/Group3.png'


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
    fontFamily: '"Poppins", "Arial", sans-serif', // Use a clean, modern font
  },
});

const EventPage = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Celebrate Special Events at Gom Shabu
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#F6F7EB' }}>
          <Typography variant="h6" gutterBottom>
            Perfect for Birthday Parties, Group Events, and Special Occasions!
          </Typography>
          <Typography paragraph>
            Enjoy a complimentary meal (value of AYCE $34.99) for the birthday person! 
            This offer is valid with a government-issued identification on the day of the birthday and must be part of a party of 2 or more.
          </Typography>
          <Typography paragraph>
            To make a reservation, please call us at (703) 712-7417. We look forward to hosting your special event!
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSnackbarOpen}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" align="center" gutterBottom>
            Check Out Our Ambiance
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={group3}
                  alt="Table Setup"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={group1}
                  alt="Event Setup"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <SnackbarContent
            message="For more details, please call us!"
            style={{ backgroundColor: '#4caf50' }}
          />
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default EventPage;
