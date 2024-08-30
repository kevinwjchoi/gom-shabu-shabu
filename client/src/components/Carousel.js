import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gomshabu from '../images/gomshabu.png'
import food1 from '../images/food1.jpeg'
import food2 from '../images/food2.jpeg'
import food3 from '../images/food3.jpeg'
import food4 from '../images/food4.jpeg'
import food5 from '../images/food5.jpeg'

const images = [
  gomshabu,
  food1,
  food2,
  food3,
  food4,
  food5,
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        zIndex: 1,
        right: '200px', // Adjust positioning
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        zIndex: 1,
        left: '20px', // Adjust positioning
      }}
      onClick={onClick}
    />
  );
};


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  

  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',  // Adjust height to fit the content appropriately
        overflow: 'hidden',
        position: 'relative', // Ensure dots are positioned relative to this container
        '& .slick-slide img': {
          width: '100%',
          height: '80%',
          objectFit: 'cover', // Maintain aspect ratio and cover container
        },
        '& .slick-dots': {
          position: 'absolute',
          top: '650px', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        },
        '& .slick-dots li': {
          margin: '0 5px', // Space between dots
        },
        '& .slick-dots li button': {
          width: '12px', // Increase size of dots
          height: '12px',
          borderRadius: '50%',
          padding: 0,
          backgroundColor: 'white', // Make background transparent
        },
        '& .slick-dots li.slick-active button': {
          backgroundColor: 'gray', // Active dot color
        },
        '& .slick-dots li button::before': {
          fontSize: '15px', // Size of the dot
          color: 'transparent',
          lineHeight: '12px',
          content: '""', // Create dot content
        },

      }}
    >
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
