import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import interior4 from '../images/Group1.png'; // This image will be used in the context box
import outside from '../images/outside.png';
import location1 from '../images/location.png';
import group3 from '../images/Group3.png'
import GoogleMaps from '../components/GoogleMaps'; // Import the GoogleMaps component

const Location = ({ address, location }) => {
  return (
    <>
      {/* Fullscreen Section */}
      <Box className="fullscreen-container" sx={{ position: 'relative' }}>
        <div
          className="fullscreen-background"
          style={{ backgroundImage: `url(${location1})`, height: '100vh', width: '100%' }}
        />
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', /* Black overlay with 50% opacity */
          zIndex: 2
        }} />
        
        <Box className="content" sx={{
          position: 'relative',
          zIndex: 3,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
        }}>
          <Typography variant="h1" sx={{
            mt: 2,
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.4)',
            animation: 'textGlow 2s ease-in-out infinite'
          }}>
            NOW OPEN 
          </Typography>
          <Typography variant="h6">
            4355 John Marr Dr, Annandale, VA 22003 
          </Typography>
        </Box>
      </Box>

      {/* Grid Layout Section */}
      <Grid container spacing={3} sx={{ mt: 3, height: '60vh' }}>
        {/* Left Box: Image with context */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${group3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '50%',
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'left',
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 'bold',
              borderRadius: 1,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            <div
              className="picture-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 2
              }}
            />
            <Typography variant="h6" sx={{ position: 'relative', zIndex: 3 }}>
              <strong style={{ fontSize: '2rem' }}>Business Operations:</strong> <br />
              <strong>Monday:</strong> 11:30 AM–10 PM<br />
              <strong>Tuesday:</strong> 11:30 AM–10 PM<br />
              <strong>Wednesday:</strong> 11:30 AM–10 PM<br />
              <strong>Thursday:</strong> 11:30 AM–10 PM<br />
              <strong>Friday:</strong> 11:30 AM–11 PM<br />
              <strong>Saturday:</strong> 11:30 AM–11 PM<br />
              <strong>Sunday:</strong> 11:30 AM–10 PM<br />
              <br />
              <strong>Phone: (703) 712-7417</strong>
            </Typography>
          </Box>
        </Grid>

        {/* Right Box: Google Maps */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50%',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <GoogleMaps address={address} location={location} />
          </Box>
        </Grid>
      </Grid>

      {/* Additional Box: Below the Left and Right Boxes */}
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
    </>
  );
};

export default Location;
