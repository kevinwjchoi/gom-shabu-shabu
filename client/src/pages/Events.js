import React from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Snackbar,
  SnackbarContent,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D6A4F', // Juniper-inspired green
    },
    secondary: {
      main: '#F6F7EB', // Light background color
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif', // Use a clean, modern font
  },
});

const EventPage = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (

  );
};

export default EventPage;
