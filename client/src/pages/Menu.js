import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import GomMenu from '../images/gomshabu_menu.jpeg'
import GomDrinks from '../images/gomshabu_drinks.jpeg'

const menuItems = [
  { id: 1, name: 'Item 1', description: 'Delicious item 1', image: GomMenu},
  { id: 2, name: 'Item 2', description: 'Tasty item 2', image: GomDrinks },
];

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const MenuPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom align="center">
        Our Menu
      </Typography>
      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                  Order Now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuPage;
