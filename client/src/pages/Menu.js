import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import GomMenu from '../images/gomshabu_menu.jpeg';
import GomDrinks from '../images/gomshabu_drinks.jpeg';
import MenuPic from '../images/menupic1.jpg';

const menuItems = [
  { id: 1, name: 'Gom Shabu Menu', image: GomMenu },
  { id: 2, name: 'Gom Shabu Drinks', image: GomDrinks },
];

const MenuPage = () => {
  const handleDownload = (image) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = image.substring(image.lastIndexOf('/') + 1);
    link.click();
  };

  return (
    <>
      <Box className="fullscreen-container">
        <div
          className="fullscreen-background"
          style={{ backgroundImage: `url(${MenuPic})` }}
        />
        <div className="overlay" />

        <Box className="content">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Mmmm. Damn right that looks good.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 15,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              textAlign: 'center',
              lineHeight: 1.7
            }}
          >
            Take a peek at our menu below
          </Typography>
        </Box>
      </Box>

      <Container>
        <Typography variant="h2" gutterBottom align="center">
          Our Menu
        </Typography>
        <Grid container spacing={4}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    },
                  }}
                  onClick={() => handleDownload(item.image)}
                >
                  Download Menu
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MenuPage;

