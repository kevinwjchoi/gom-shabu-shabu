import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, CircularProgress } from '@mui/material';
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

const Carousel = ({ children, onLoad }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
    if (onLoad) onLoad(); // Notify parent when images are loaded
  };

  useEffect(() => {
    let loadedImages = 0;

    images.forEach((img) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          handleImageLoad();
        }
      };
    });

    // Check if all images are already loaded
    if (images.every(img => img.complete)) {
      handleImageLoad();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1700,
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
      {!imagesLoaded ? (
        <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      ) : (
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default Carousel;
