import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

import '../styles/Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import interior2 from '../images/Interior2.png';
import veggie2 from '../images/Veggie2.png';
import seafood1 from '../images/Seafood1.png';
import plate3 from '../images/Plate3.png';


const images = [
  interior2,
  plate3,
  seafood1,
  veggie2,
];

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1700, // Adjust this value for smoother transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        overflow: 'hidden',
        position: 'relative',
        '& .slick-slide img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }
      }}
    >
      <div className="carousel-overlay" />
      {children}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

    </Box>
  );
};

export default Carousel;
