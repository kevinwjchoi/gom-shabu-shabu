import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import '../App.css';
import { Typography, useMediaQuery } from '@mui/material';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleCarouselLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <main>
      <Carousel onLoad={handleCarouselLoad}>
        {/* Directly add Typography elements to the Carousel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Ensure it takes full height of the carousel
            textAlign: 'center', // Center text
            padding: '16px', // You can adjust this as needed
          }}
        >
          <Typography
            className="carousel-title-content fade-in"
            variant="h6"
            sx={{
              fontWeight: 100,
              fontSize: { xs: '3rem', md: '6rem' },
              color: 'white',
              mb: isMobile ? 1 : 0, // Add margin bottom on mobile
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
              color: 'white',
            }}
          >
            a modern twist to traditional hot pot
          </Typography>
        </div>
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
