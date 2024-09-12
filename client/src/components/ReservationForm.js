import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  numberOfPeople: Yup.number().required('Number of people is required').positive().integer(),
  date: Yup.date().required('Date is required').min(new Date(), 'Date must be today or later'),
  time: Yup.string().required('Time is required'),
  phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Phone number is not valid'),
});

const ReservationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      numberOfPeople: '',
      date: '',
      time: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          alert('Reservation made successfully');
        } else {
          alert('Error making reservation');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error making reservation');
      }
    },
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Make a Reservation
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Number of People"
              name="numberOfPeople"
              type="number"
              value={formik.values.numberOfPeople}
              onChange={formik.handleChange}
              error={formik.touched.numberOfPeople && Boolean(formik.errors.numberOfPeople)}
              helperText={formik.touched.numberOfPeople && formik.errors.numberOfPeople}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Reservation
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ReservationForm;
