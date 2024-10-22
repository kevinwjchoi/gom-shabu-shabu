import React from 'react';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Events.css'



const Events = () => {
    return (
        <div className="eventpage">
            <div className="event-background">
            <div className="eventpageoverlay">
                <div className="content">
                <h1>Special event coming up?</h1>
                <p>Join us for an unforgettable culinary experience!</p>
                </div>
            </div>
            </div>
            <section className="event-section">
            <h2>Event 1</h2>
            <p>Description of Event 1.</p>
            </section>
            <section className="event-section">
            <h2>Event 2</h2>
            <p>Description of Event 2.</p>
            </section>
            {/* Add more sections as needed */}
        </div>
        );
    };

export default Events;
