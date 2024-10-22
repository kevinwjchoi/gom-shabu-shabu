import React from 'react';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import '../styles/Events.css';

const Events = () => {
  return (
    <div className="eventpage">
      {/* First Background Section */}
      <div className="event-background">
        <div className="eventpageoverlay">
          <Container>
            <Box textAlign="center" py={5}>
                <Typography variant="h6"
                sx={{
                    fontWeight: 100,
                    fontSize: { xs: '2rem', md: '4rem' }, // Adjusted for mobile
                    color: 'white',
                    textAlign: 'center', // Center text
                    padding: { xs: 2, md: 0 }, // Responsive padding
                }}
                >
                    Special event coming up?
                </Typography>
                <Typography variant="body1">
                    Join us for an unforgettable culinary experience!
                </Typography>
            </Box>
          </Container>
        </div>
      </div>

      {/* Second Background Section */}
      <div className="event-background-2">
        <div className="eventpageoverlay">
          <Container>
            <Box textAlign="center" py={5}>
                <Typography variant="h6"
                sx={{
                    fontWeight: 100,
                    fontSize: { xs: '2rem', md: '4rem' }, // Adjusted for mobile
                    color: 'white',
                    textAlign: 'center', // Center text
                    padding: { xs: 2, md: 0 }, // Responsive padding
                }}
                >
                    Our long tables can accomodate a party of 12.
                </Typography>
                <Typography variant="body1">
                    We also offer a closed off section for more private parties! 
                </Typography>
            </Box>
          </Container>
          <Box
            sx={{
            mt: 3,
            padding: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 1,
            textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Call us to make reservations
            </Typography>
            <Typography variant="body1">
              Make sure to provide us with: Name, Date, Time, # of Guests, and Phone Number
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Events;
