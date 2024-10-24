import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import '../styles/Events.css';

const Events = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="eventpage">
      {/* First Background Section */}
      <div className="event-background">
        <div className="eventpageoverlay">
          <Container>
            <Box textAlign="center" py={5}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 100,
                  fontSize: { xs: '2rem', md: '4rem' },
                  color: 'white',
                  textAlign: 'center',
                  padding: { xs: 2, md: 0 },
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
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 100,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'white',
                  textAlign: 'center',
                  padding: { xs: 2, md: 0 },
                }}
              >
                Our long tables can accommodate a party of 12.
              </Typography>
              <Typography variant="h6">
                We also offer a closed-off section for more private parties!
              </Typography>
            </Box>
          </Container>
        </div>
      </div>

      {/* Reservation Box */}
      <Container>
        <Box
          sx={{
            mt: 3,
            padding: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: 'black' }}>
            Call us to make reservations
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'black' }}>
            Make sure to provide us with: Name, Date, Time, # of Guests, and Phone Number
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Check Our Limited Time Offer!
          </Button>
        </Box>
      </Container>

      {/* Pop-Up Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Limited Time Offer!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Enjoy a **Free AYCE** on your birthday!
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            *Must present a valid government-issued ID on your actual birthday. Offer valid for parties of 2 or more.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Events;
