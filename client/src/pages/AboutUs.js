import React from "react";
import { Box, Typography } from '@mui/material';
import '../App.css';
import interior1 from '../images/Interior1.png';
import food3 from '../images/food3.jpeg';
import meat1 from '../images/meat1.jpeg';
import ColorLogo from '../images/gomlogocolor.png'

const AboutUs = () => {
    return (
        <>
            {/* Fullscreen Section */}
            <Box className="fullscreen-container">
                <div
                    className="fullscreen-background"
                    style={{ backgroundImage: `url(${interior1})` }}
                />
                <div className="overlay" />

                <Box className="content">
                    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                        ABOUT US
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
                        Nestled in the heart of Annandale, Gom Shabu is the fourth location in our ever-growing chain of Korean hot pot restaurants. Since our establishment in 2021, we have been dedicated to bringing an authentic and delicious hot pot experience to our guests.
                    </Typography>
                </Box>
            </Box>

            {/* Additional Sections Below */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gridTemplateRows: { xs: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' },
                    gap: 1,
                    padding: 1,
                    height: 'auto', // Adjusting the height to auto for flexibility
                }}
            >
                {/* First Section: What We Offer */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '1 / 2' },
                        gridRow: { xs: '1', md: '1 / 2' },
                        padding: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start', // Adjust alignment within the grid cell
                        alignItems: 'flex-start',
                        height: '100vh', // Full height to match other sections
                        backgroundColor: '#222222',
                        position: 'relative',
                        paddingTop: '20%', // Adjust this value to move content up or down
                    }}
                >
                    <div className="background-overlay" />
                    <Box className="content-with-background" sx={{ zIndex: 1 }}>
                        <Typography variant="h1" sx={{ color: 'white', mt:2, fontSize: { xs: '2rem', md: '3rem' } }}>
                            WHAT WE OFFER
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(65, 64, 64, 0.5)', 
                                borderRadius: '12px', // Rounded corners
                                padding: 3, // Padding inside the box
                                mt: 4, // Margin top to separate from the heading
                                maxWidth: '700px', // Maximum width
                                boxShadow: 2, // Optional shadow for depth
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    textAlign: 'left', 
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                Our menu features an extensive selection of premium meats, fresh vegetables, and a variety of noodles, allowing you to customize your hot pot to perfection. Whether you're a fan of tender beef, succulent pork, or crisp vegetables, we have something to suit every taste.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Second Section: Photo 1 */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '2 / 3' },
                        gridRow: { xs: '2', md: '1 / 2' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: '#222222',
                    }}
                >
                    <Box className="image-container" sx={{ height: '100%', width: '100%' }}>
                        <Box
                            component="img"
                            src={food3}
                            alt="About Us"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Box className="image-overlay">
                            <Typography variant="body1" className="image-overlay-content" sx={{ color: 'white', textAlign: 'center', mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                Our vegetable broth is made in-house by simmering fresh vegetables, herbs, and spices for 8 hours. This slow-cooking process enhances the flavors, resulting in a rich, savory broth that forms the perfect base for our dishes.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Third Section: Photo 2 */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '1 / 2' },
                        gridRow: { xs: '3', md: '2 / 3' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'black',
                    }}
                >
                    <Box className="image-container" sx={{ height: '100%', width: '100%' }}>
                        <Box
                            component="img"
                            src={meat1}
                            alt="New Section"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Box className="image-overlay">
                            <Typography 
                                variant="body1" className="image-overlay-content" 
                                sx={{ color: 'white', textAlign: 'center', 
                                mt: 2, 
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                paddingLeft: { xs: '2rem', md: '3rem' }, 
                                paddingRight: { xs: '2rem', md: '3rem' } }}>
                                Our meats are thinly sliced to order, ensuring peak freshness and tenderness with every dish. Each slice is expertly cut for consistent quality and flavor.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Fourth Section: Join Us */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '2 / 3' },
                        gridRow: { xs: '4', md: '2 / 3' },
                        padding: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100vh',
                        position: 'relative',
                        backgroundColor: '#222222',
                    }}
                >
                    <div className="background-overlay" />
                    <Box className="content-with-background" sx={{ zIndex: 1 }}>
                        <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' } }}>
                            JOIN US
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(65, 64, 64, 0.5)', 
                                borderRadius: '12px', // Rounded corners
                                padding: 3, // Padding inside the box
                                mt: 4, // Margin top to separate from the heading
                                maxWidth: '700px', // Maximum width
                                boxShadow: 2, // Optional shadow for depth
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    textAlign: 'left', 
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                We invite you to experience the delicious, interactive dining that Gom Shabu has to offer. Whether you’re a hot pot aficionado or trying it for the first time, our team is here to ensure your visit is memorable and enjoyable. Thank you for being part of our journey. We look forward to serving you!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutUs;
