import React from 'react';
import Carousel from '../components/Carousel';
import '../App.css'; // Ensure this file imports the CSS
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <main>
      <Carousel>
        <Typography
          className="carousel-title-content fade-in"
          variant="h6"
          sx={{
            fontWeight: 100,
            fontSize: { xs: '3rem', md: '6rem' }, // Responsive font size
            color: 'white',
          }}
        >
          Gom Shabu
        </Typography>
        <Typography
          className="carousel-content fade-in"
          variant="h6"
          sx={{
            fontWeight: 100,
            fontSize: { xs: '1.5rem', md: '2.25rem' }, // Responsive font size
            color: 'white'
          }}
        >
          a modern twist to traditional hot pot
        </Typography>
      </Carousel>

      <Box
        sx={{
          padding: { xs: 4, md: 8 }, // Responsive padding
          backgroundColor: '#4f5359',
          margin: '0 auto',
          maxWidth: '100%',
          display: 'flex', // Use flexbox for centering
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
            color: 'white',
            textAlign: 'center', // Center text on small screens
          }}
        >
          A JOURNEY INTO KOREAN HOT POT DELIGHT
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
            color: 'white',
            textAlign: 'center', // Center text on small screens
            paddingTop: 2, // Add some spacing
          }}
        >
          Our menu features an extensive selection of premium meats, fresh vegetables, and a variety of noodles, allowing you to customize your hot pot to perfection. Whether you're a fan of tender beef, succulent pork, or fresh seafood, we have something to suit every taste.
        </Typography>
      </Box>
    </main>
  );
}

export default Home;
