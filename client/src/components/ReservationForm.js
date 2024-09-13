import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const hoursOfOperation = {
  Thursday: { start: '11:30', end: '22:00' },
  Friday: { start: '11:30', end: '23:00' },
  Saturday: { start: '11:30', end: '23:00' },
  Sunday: { start: '11:30', end: '22:00' },
  Monday: { start: '11:30', end: '22:00' },
  Tuesday: { start: '11:30', end: '22:00' },
  Wednesday: { start: '11:30', end: '22:00' },
};

const getDayOfWeek = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(date).getDay()];
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  numberOfPeople: Yup.number()
    .required('Number of people is required')
    .positive('Number of people must be a positive number')
    .integer('Number of people must be an integer')
    .min(6, 'Number of people must be 6 or more'),
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date must be today or later'),
  time: Yup.string()
    .required('Time is required')
    .matches(/^(?:[01]\d|2[0-3]):[0-5]\d$/, 'Time must be in HH:MM format')
    .test('is-valid-time', 'Time must be within hours of operation', function (value) {
      const { date } = this.parent;
      if (!date || !value) return false;
      const dayOfWeek = getDayOfWeek(date);
      const { start, end } = hoursOfOperation[dayOfWeek];

      const time = value;
      return time >= start && time <= end;
    }),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number is not valid'),
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
        Make a Reservation (party of 6+)
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
