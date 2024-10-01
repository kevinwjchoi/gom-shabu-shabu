import React from 'react';
import Carousel from '../components/Carousel';
import '../App.css'; // Ensure this file imports the CSS
import { Box, Typography } from '@mui/material';
// import ReservationForm from '../components/ReservationForm';

const Home = () => {
  return (
    <main>
      <Carousel>
        <Typography
          className="carousel-title-content fade-in"
          variant="h6"
          sx={{
            fontWeight: 100,
            fontSize: '6rem',
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
            fontSize: '2.25rem',
            color: 'white'
          }}
        >
          a modern twist to traditional hot pot
        </Typography>
      </Carousel>

      <Box
        sx={{
          padding: 8,
          backgroundColor: '#4f5359', // Optional: Background color to differentiate the box
          margin: '0px auto',
          maxWidth: '100%', // Optional: Maximum width for readability
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            fontSize: '3rem',
            color: 'white',
          }}
        >
          A JOURNEY INTO KOREAN HOT POT DELIGHT
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            fontSize: '1.25rem',
            color: 'white'
          }}
        >
          Our menu features an extensive selection of premium meats, fresh vegetables, and a variety of noodles, allowing you to customize your hot pot to perfection. Whether you're a fan of tender beef, succulent pork, or fresh seafood, we have something to suit every taste.
        </Typography>
      </Box>

      <Box
        sx={{
          padding: 10,
          backgroundColor: 'white',
          margin: '0px auto',
          maxWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </main>
  );
}

export default Home;
