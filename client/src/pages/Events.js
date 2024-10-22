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
              <Typography variant="h2" gutterBottom>
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
              <Typography variant="h2" gutterBottom>
                Don't Miss Out!
              </Typography>
              <Typography variant="body1">
                Explore our exclusive menu for the event!
              </Typography>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Events;
