import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import '../App.css';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleCarouselLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <main>
      <Carousel onLoad={handleCarouselLoad}>
        <Typography
          className="carousel-title-content fade-in"
          variant="h6"
          sx={{
            fontWeight: 100,
            fontSize: { xs: '3rem', md: '6rem' },
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
            fontSize: { xs: '1.5rem', md: '2.25rem' },
            color: 'white'
          }}
        >
          a modern twist to traditional hot pot
        </Typography>
      </Carousel>

      <Box
        sx={{
          padding: { xs: 4, md: 8 },
          backgroundColor: '#4f5359',
          margin: '0 auto',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'white',
            textAlign: 'center',
          }}
        >
          A JOURNEY INTO KOREAN HOT POT DELIGHT
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            fontSize: { xs: '1rem', md: '1.25rem' },
            color: 'white',
            textAlign: 'center',
            paddingTop: 2,
          }}
        >
          Our menu features an extensive selection of premium meats, fresh vegetables, and a variety of noodles, allowing you to customize your hot pot to perfection. Whether you're a fan of tender beef, succulent pork, or fresh seafood, we have something to suit every taste.
        </Typography>
      </Box>
    </main>
  );
}

export default Home;
