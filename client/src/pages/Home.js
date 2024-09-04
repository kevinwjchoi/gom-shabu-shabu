import React from 'react';
import Carousel from '../components/Carousel';
import { Box, Typography } from '@mui/material';


const Home = () => {


    return (
      <main>

        <Carousel />
        <Box
            sx={{
                padding: 10,
                backgroundColor: '#4f5359', // Optional: Background color to differentiate the box
                margin: '0px auto',
                maxWidth: '100%', // Optional: Maximum width for readability
                justifyContent: 'center',
                alignItems: 'center',
            }}
          >
          <Typography
              variant="h1"
              sx={{
                fontWeight: 300,
                fontSize: '4rem', // Adjust the font size as needed
                color: 'white', // Adjust text color as needed
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
            Our menu features an extensive selection of premium meats, fresh vegetables, and a variety of noodles, allowing you to customize your hot pot to perfection. Whether you're a fan of tender beef, succulent pork, or crisp vegetables, we have something to suit every taste.

          </Typography>
        </Box>
        
      </main>
    );
}

export default Home; 

