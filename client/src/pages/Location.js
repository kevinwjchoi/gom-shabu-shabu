import React from 'react';
import { Box, Typography } from '@mui/material';
import location1 from '../images/location.png';
import outside from '../images/outside.png';
import GoogleMaps from '../components/GoogleMaps'; // Import the MapComponent

const Location = () => {
    return (
        <>
            {/* Fullscreen Section */}
            <Box className="fullscreen-container">
                <div
                    className="fullscreen-background"
                    style={{ backgroundImage: `url(${outside})` }}
                />
                <div className="overlay" />

                <Box className="content">
                    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                        4355 John Marr Dr
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            mt: 2, 
                            fontSize: { xs: '1rem', md: '1.25rem' }, 
                            maxWidth: '700px', 
                            textAlign: 'center',
                            lineHeight: 1.7 
                        }}
                    >                     
                        Come check out Gom Shabu, located in the K Market Plaza in Annandale, VA. Our restaurant offers a delicious array of shabu-shabu dishes, featuring fresh ingredients and rich flavors in a cozy setting. Conveniently situated in the bustling plaza, Gom Shabu is the perfect spot to enjoy a satisfying meal with friends and family. We look forward to welcoming you!
                    </Typography>
                </Box>
            </Box>
            <GoogleMaps /> 
        </>
    );
};

export default Location;
