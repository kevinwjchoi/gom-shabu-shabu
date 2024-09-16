import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import interior4 from '../images/Group1.png'; // This image will be used in the context box
import outside from '../images/outside.png';
import location2 from '../images/location2.png';
import GoogleMaps from '../components/GoogleMaps'; // Import the GoogleMaps component

const Location = ({ address, location }) => {
  return (
    <>
      {/* Fullscreen Section */}
      <Box className="fullscreen-container" sx={{ position: 'relative' }}>
        <div
          className="fullscreen-background"
          style={{ backgroundImage: `url(${outside})`, height: '100vh', width: '100%' }}
        />
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Black overlay with 50% opacity */
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
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            4355 John Marr Dr
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              textAlign: 'center',
              lineHeight: 1.7,
            }}
          >
            Come check out Gom Shabu, located in the K Market Plaza in Annandale, VA. Our restaurant offers a delicious array of shabu-shabu dishes, featuring fresh ingredients and rich flavors in a cozy setting. Conveniently situated in the bustling plaza, Gom Shabu is the perfect spot to enjoy a satisfying meal with friends and family. We look forward to welcoming you!
          </Typography>
        </Box>
      </Box>

      {/* Grid Layout Section */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Left Box: Image with context */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${interior4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '50%', // Ensure it takes the full height of the container
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'left',
              fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
              fontWeight: 'bold',
              borderRadius: 1,
              overflow: 'hidden', // Ensure no overflow issues
              boxSizing: 'border-box' // Include padding in the box's height
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
                backgroundColor: 'rgba(0, 0, 0, 0.6)', /* Black overlay with 50% opacity */
                zIndex: 2
              }}
            />
            <Typography variant="h6" sx={{ position: 'relative', zIndex: 3 }}>
              <strong style={{fontSize: '2rem'}}>Business hours:</strong> <br />  
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
              height: '50%', // Ensure it takes the full height of the container
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <GoogleMaps address={address} location={location} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Location;
